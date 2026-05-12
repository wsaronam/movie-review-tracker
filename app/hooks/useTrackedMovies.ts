import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { MovieRatings } from '../api/omdb';




const STORAGE_KEY = 'tracked_movies';


export function useTrackedMovies() {
    const [trackedMovies, setTrackedMovies] = useState<MovieRatings[]>([]);

    useEffect(() => {
        loadMovies();
    }, []);


    async function loadMovies() {
        try {
            const stored = await AsyncStorage.getItem(STORAGE_KEY);
            if (stored) setTrackedMovies(JSON.parse(stored));
        }
        catch (err) {
            console.log('Error loading movie(s): ' + err);
        }
    }

    async function addMovie(movie: MovieRatings) {
        const alreadyAdded = trackedMovies.find((m) => m.imdbID === movie.imdbID);
        if (alreadyAdded) return;

        const updated = [movie, ...trackedMovies];
        setTrackedMovies(updated);

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        }
        catch (err) {
            console.log('Error saving movie: ' + err);
        }
    }

    async function removeMovie(imdbID: string) {
        const updated = trackedMovies.filter((m) => m.imdbID !== imdbID);
        setTrackedMovies(updated);

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        }
        catch (err) {
            console.log('Error removing movie: ' + err);
        }
    }


    return { trackedMovies, addMovie, removeMovie }
}