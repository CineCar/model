import { Movie, MovieScreening } from "com.cinecar.objects";

export interface MovieService {
    changeMovieInformation(id: number, name: string, duration: number, price: number, imageUrl: string): Promise<Movie>;

    changeMovieScreeningInformation(id: number, dateTime: Date): Promise<MovieScreening>;

    createMovie(name: string, duration: number, price: number, imageUrl: string): Promise<Movie>;

    createMovieScreening(movieId: number, dateTime: Date): Promise<MovieScreening>;

    deleteMovie(movieId: number): Promise<void>;

    deleteMovieScreening(moviescreeningId: number): Promise<void>;

    getMovie(movieId: number): Promise<Movie>;

    getMovies(): Promise<Array<Movie>>;

    getMovieScreenings(): Promise<Array<MovieScreening>>;

    searchMovies(query: string): Promise<Array<Movie>>;

    filterMovieScreenings(start: Date, end: Date): Promise<Array<MovieScreening>>;
}
