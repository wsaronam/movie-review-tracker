import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { searchMovies } from '../api/omdb';




export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');

  async function handleSearch() {
    searchMovies(query);
    
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