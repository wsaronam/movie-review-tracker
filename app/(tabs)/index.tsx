import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getMovieRatings, MovieSearchResult, searchMovies } from '../api/omdb';
import { useTrackedMovies } from '../hooks/useTrackedMovies';
import { colors, spacing } from '../theme';




const testMovie = {
  imdbID: 'tt0381061',
  title: 'Casino Royale',
  year: '2006',
  genre: 'Action, Adventure, Thriller',
  poster: 'https://m.media-amazon.com/images/M/MV5BMWQ1ZDM4NDktMWY0NC00MjcxLWJlMDMtNmE2MGVhYzRjMWQ0XkEyXkFqcGc@._V1_SX300.jpg',
  imdb: '8.0/10',
  rottenTomatoes: '94%',
  metacritic: '80/100',
};


export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MovieSearchResult[]>([]);
  const [tracking, setTracking] = useState<string | null>(null);

  const {trackedMovies, addMovie} = useTrackedMovies();


  useEffect(() => {
    console.log(trackedMovies);
  }, [trackedMovies])
  

  async function handleSearch() {
    if (!query.trim()) return;

    try { 
      const movies = await searchMovies(query);
      if (movies.length === 0) {
        console.log('No results');
      }
      else {
        setResults(movies);
      }
    }
    catch (err) {
      console.log(err);
    }
  }

  async function handleTrack(movie: MovieSearchResult) {
    const ratings = await getMovieRatings(movie.imdbID);
    if (ratings) await addMovie(ratings);
  }

  function isTracked(imdbID: string) {
    return trackedMovies.some((m) => m.imdbID === imdbID);
  }



  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
        <TextInput 
          style={styles.input}
          placeholder='Search for a movie...'
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType='search'
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={results}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text style={{color: 'white'}}>{item.Title}</Text>
              <Text style={{color: 'white'}}>{item.Year}</Text>
            </View>
            <TouchableOpacity
              style={{backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', minWidth: 70, height: 32}}
              onPress={() => handleTrack(item)}
              disabled={isTracked(item.imdbID) || tracking === item.imdbID}
            >

            </TouchableOpacity>
          </View>
        )}
      />


    </View>
  );

}




const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md
  }
})