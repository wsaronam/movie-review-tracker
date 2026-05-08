import { Image, StyleSheet, Text, View } from 'react-native';
import { MovieRatings } from '../api/omdb';
import { borderRadius, colors, fontSizes, spacing } from '../theme';
import RatingBadge from './RatingBadge';




interface MovieCardProps {
    movie: MovieRatings;
}

export default function MovieCard({movie}: MovieCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {movie.poster ? 
                ( <Image source={{ uri: movie.poster }} style={styles.poster} /> ) : null}
                <View style={styles.info}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.subtitle}>{movie.year}</Text>
                    <Text style={styles.subtitle}>{movie.genre}</Text>
                </View>
            </View>

            <View style={styles.ratingsGrid}>
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

    header: {
        flexDirection: 'row',
        marginBottom: spacing.md
    },

    poster: {
        width: 70,
        height: 100,
        borderRadius: borderRadius.sm,
        marginRight: spacing.md
    },

    info: {
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        fontSize: fontSizes.lg,
        fontWeight: '600',
        color: colors.textPrimary,
        marginBottom: spacing.sm
    },

    subtitle: {
        fontSize: fontSizes.sm,
        color: colors.textSecondary,
        marginBottom: 2
    },

    ratingsGrid: {
        flexDirection: 'row',
        gap: spacing.sm
    }
})