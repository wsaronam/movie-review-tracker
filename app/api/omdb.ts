// temp key location
const API_KEY = 'key_goes_here';
const BASE_URL = 'https://www.omdbapi.com';




export interface MovieSearchResult {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
}

export interface MovieRatings {
    imdbID: string;
    title: string;
    year: string;
    genre: string;
    poster: string;
    imdb: string;
    rottenTomatoes: string;
    metacritic: string;
}


export async function searchMovies(query: string): Promise<boolean> {
    return false;
}

export async function getMovieRatings(imdbID: string): Promise<boolean | null> {
    return false;
}


// type npx expo start to generate qr code to view page