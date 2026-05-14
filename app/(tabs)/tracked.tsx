import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MovieCard from '../components/MovieCard';
import { useTrackedMovies } from "../hooks/useTrackedMovies";
import { colors, fontSizes, spacing } from '../theme';



export default function TrackedScreen() {
    const { trackedMovies, removeMovie } = useTrackedMovies();

    function renderEmpty() {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No movies being tracked yet.</Text>
                <Text style={styles.emptySubtext}>Search for a movie and tap Track to track it.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={trackedMovies}
                keyExtractor={(item) => item.imdbID}
                renderItem={({item}) => (
                    <View>
                        <MovieCard movie={item} />

                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => removeMovie(item.imdbID)}
                        >
                            <Text style={styles.removeButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={renderEmpty}
                contentContainerStyle={styles.list}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    emptyText: {
        fontSize: fontSizes.lg,
        fontWeight: '600',
        color: colors.textPrimary,
        marginBottom: spacing.sm
    },

    emptySubtext: {
        fontSize: fontSizes.md,
        color: colors.textSecondary,
        textAlign: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: colors.background
    },

    removeButton: {
        alignItems: 'center',
        padding: spacing.md,
        marginTop: -spacing.sm,
        marginBottom: spacing.md,
        borderWidth: 0.5,
        borderColor: colors.border,
        borderRadius: 8
    },

    removeButtonText: {
        fontSize: fontSizes.md,
        color: colors.error
    },

    list: {
        padding: spacing.md,
        flexGrow: 1
    }

})