import {  Movie, MovieScreening} from "com.cinecar.objects";

export interface MovieService  {


    changeMovieInformation(id: number, name: string, duration: number): void;

    changeMovieScreeningInformationInformation(id: number, dateTime: Date): void;

    createMovie(name: string, duration: number): Movie;

    createMovieScreening(movieid: number, dateTime: Date): MovieScreening;

    deleteMovie(movieid: number): void;

    deteteMovieScreening(moviescreeningid: number): void;

    getMovie(movieid: number): Movie;

    getMovies(): Array<Movie>;

    getMovieScreenings(): Array<MovieScreening>;


}