import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MovieCard from '../components/MovieCard';
import { useTrackedMovies } from "../hooks/useTrackedMovies";
import { spacing } from '../theme';



export default function TrackedScreen() {
    const { trackedMovies, removeMovie } = useTrackedMovies();

    function renderEmpty() {
        return (
            <View>
                <Text>No movies being tracked yet.</Text>
                <Text>Search for a movie and tap Track to track it.</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList
                data={trackedMovies}
                keyExtractor={(item) => item.imdbID}
                renderItem={({item}) => (
                    <View>
                        <MovieCard movie={item} />

                        <TouchableOpacity
                            style={{ padding: spacing.sm, alignItems: 'center' }}
                            onPress={() => removeMovie(item.imdbID)}
                        >
                            <Text style={{ color: '#c52d22' }}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    )
}


const styles = StyleSheet.create({

})