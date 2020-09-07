import { MovieService } from "./MovieService";
import { Movie, MovieScreening } from "com.cinecar.objects";

import {  DatabaseConnectorImplementation, DatabaseObjectType } from "com.cinecar.databaseconnector";

class MovieServiceImplementation implements MovieService{
    changeMovieInformation(id: number, name: string, duration: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    changeMovieScreeningInformationInformation(id: number, dateTime: Date): Promise<void> {
        throw new Error("Method not implemented.");
    }
    createMovie(name: string, duration: number): Promise<Movie>{
        
        const movie: Movie = new Movie();

        movie.setDuration(duration);
        movie.setName(name);

        return <Promise<Movie>> DatabaseConnectorImplementation.getSingleton().create(movie, DatabaseObjectType.Movie);
    }
    createMovieScreening(movieid: number, dateTime: Date): Promise<MovieScreening> {
        const moviescreening: MovieScreening = new MovieScreening();

        let movie: Movie = new Movie();
        movie.setId(movieid);

        moviescreening.setMovie(movie);
        moviescreening.setDatetime(dateTime);

        return <Promise<MovieScreening>>DatabaseConnectorImplementation.getSingleton().create(moviescreening, DatabaseObjectType.MovieScreening);

        
    }
    deleteMovie(movieid: number): Promise<void> {


        return DatabaseConnectorImplementation.getSingleton().delete(movieid, DatabaseObjectType.Movie);

    }
    deleteMovieScreening(moviescreeningid: number): Promise<void> {
        return DatabaseConnectorImplementation.getSingleton().delete(moviescreeningid, DatabaseObjectType.MovieScreening);
    }
    getMovie(movieid: number): Promise<Movie> {
        return <Promise<Movie>> DatabaseConnectorImplementation.getSingleton().get(movieid, DatabaseObjectType.Movie);
    }
    getMovies(): Promise<Movie[]> {
        return <Promise<Movie[]>> DatabaseConnectorImplementation.getSingleton().getAll(DatabaseObjectType.Movie);
    }
    getMovieScreenings(): Promise<MovieScreening[]> {
        return <Promise<MovieScreening[]>> DatabaseConnectorImplementation.getSingleton().getAll(DatabaseObjectType.MovieScreening);
    }


}