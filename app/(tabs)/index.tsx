import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { searchMovies } from '../api/omdb';
import MovieCard from '../components/MovieCard';
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
  const [results, setResults] = useState('');

  // TEST -------
  const { trackedMovies, addMovie, removeMovie } = useTrackedMovies();

  useEffect(() => {
    addMovie(testMovie);
  }, [])

  useEffect(() => {
    console.log('Tracked movies:', trackedMovies);
  }, [trackedMovies]);
  // TEST -------


  async function handleSearch() {
    if (!query.trim()) return;

    try { 
      const movies = await searchMovies(query);
      if (movies.length === 0) {
        console.log('No results');
      }
      else {
        //setResults(movies);
        //console.log(movies);
      }
    }
    catch (err) {
      console.log(err);
    }
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
      </View>

      <MovieCard movie={testMovie} />

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