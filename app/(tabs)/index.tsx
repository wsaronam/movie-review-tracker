import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { searchMovies } from '../api/omdb';
import MovieCard from '../components/MovieCard';




export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');


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
    <View>
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
        <TextInput 
          style={{ borderWidth: 1, borderColor: '#ccc', margin: 16 }}
          placeholder='Search for a movie...'
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType='search'
        />
      </View>

      <View style={{ flex: 1, backgroundColor: '#fff', padding: 200 }}>
        <MovieCard movie={testMovie} />
      </View>

    </View>
  );

}