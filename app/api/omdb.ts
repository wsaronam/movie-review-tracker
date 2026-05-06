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


export async function searchMovies(query: string): Promise<MovieSearchResult[]> {
    const res = await fetch(`${BASE_URL}/?s=${encodeURIComponent(query)}&type=movie&apikey=${API_KEY}`);
    const data = await res.json();

    if (data.Response === 'False') return [];
    return data.Search;
}

export async function getMovieRatings(imdbID: string): Promise<MovieRatings | null> {
    const res = await fetch(`${BASE_URL}/?i=${imdbID}&apikey=${API_KEY}`);
    const data = await res.json();

    if (data.Response === 'False') return null;

    const ratings = data.Ratings || [];

    function getRating(source: string): string {
        const match = ratings.find((r: any) => r.Source === source);
        if (match) return match.Value;
        return 'N/A';
    }

    return {
        imdbID: data.imdbID,
        title: data.Title,
        year: data.Year,
        genre: data.Genre,
        poster: data.Poster !== 'N/A' ? data.Poster : '',
        imdb: data.imdbRating !== 'N/A' ? `${data.imdbRating}/10` : 'N/A',
        rottenTomatoes: getRating('Rotten Tomatoes'),
        metacritic: getRating('Metacritic'),
    }
}


// type npx expo start to generate qr code to view page