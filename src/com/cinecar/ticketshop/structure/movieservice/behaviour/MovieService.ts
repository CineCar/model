import {  Movie, MovieScreening} from "com.cinecar.objects";

export interface MovieService  {


    changeMovieInformation(id: number, name: string, duration: number): Promise<Movie>;

    changeMovieScreeningInformation(id: number, dateTime: Date): Promise<MovieScreening>;

    createMovie(name: string, duration: number): Promise<Movie>;

    createMovieScreening(movieid: number, dateTime: Date): Promise<MovieScreening>;

    deleteMovie(movieid: number): Promise<void>;

    deleteMovieScreening(moviescreeningid: number): Promise<void>;

    getMovie(movieid: number): Promise<Movie>;

    getMovies(): Promise<Array<Movie>>;

    getMovieScreenings(): Promise<Array<MovieScreening>>;


}