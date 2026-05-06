import { Image, StyleSheet, Text, View } from 'react-native';
import { MovieRatings } from '../api/omdb';
import RatingBadge from './RatingBadge';




interface MovieCardProps {
    movie: MovieRatings;
}

export default function MovieCard({movie}: MovieCardProps) {
    return (
        <View>
            <View>
                {movie.poster ? 
                ( <Image source={{ uri: movie.poster }} /> ) : null}
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
                />
                <RatingBadge
                    label='Rotten Tomatoes'
                    value={movie.rottenTomatoes}
                    subLabel='critic score'
                />
                <RatingBadge
                    label='Metacritic'
                    value={movie.metacritic}
                    subLabel='critic score'
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create ({

})