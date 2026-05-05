import { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { getMovieRatings, searchMovies } from '../api/omdb';




export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');


  useEffect(() => {
    searchMovies('Casino Royale').then((data) => { console.log(data); });
  }, []);

  useEffect(() => {
    getMovieRatings('tt0381061').then((data) => { console.log(data); });
  }, []);



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
    </View>
  );

}