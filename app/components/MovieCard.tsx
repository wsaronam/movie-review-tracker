import { Image, StyleSheet, Text, View } from 'react-native';
import { MovieRatings } from '../api/omdb';
import { borderRadius, colors, spacing } from '../theme';
import RatingBadge from './RatingBadge';




interface MovieCardProps {
    movie: MovieRatings;
}

export default function MovieCard({movie}: MovieCardProps) {
    return (
        <View style={styles.container}>
            <View>
                {movie.poster ? 
                ( <Image source={{ uri: movie.poster }} style={styles.poster} /> ) : null}
                <View>
                    <Text>{movie.title}</Text>
                    <Text>{movie.year}</Text>
                    <Text>{movie.genre}</Text>
                </View>
            </View>

            <View>
                <RatingBadge
                    label='IMDb'
                    value={movie.imdb}
                    subLabel='user score'
                    color={colors.imdb}
                />
                <RatingBadge
                    label='Rotten Tomatoes'
                    value={movie.rottenTomatoes}
                    subLabel='critic score'
                    color={colors.rottenTomatoes}
                />
                <RatingBadge
                    label='Metacritic'
                    value={movie.metacritic}
                    subLabel='critic score'
                    color={colors.metacritic}
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.background,
        borderRadius: borderRadius.lg,
        borderWidth: 0.5,
        borderColor: colors.backgroundSecondary,
        padding: spacing.md,
        marginBottom: spacing.md
    },

    poster: {
        width: 70,
        height: 100
    }
})