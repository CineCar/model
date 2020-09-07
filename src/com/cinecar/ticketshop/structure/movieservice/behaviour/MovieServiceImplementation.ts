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
        throw new Error("Method not implemented.");
    }
    deleteMovie(movieid: number): Promise<void> {


        return DatabaseConnectorImplementation.getSingleton().delete(movieid, DatabaseObjectType.Movie);

    }
    deleteMovieScreening(moviescreeningid: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getMovie(movieid: number): Promise<Movie> {
        throw new Error("Method not implemented.");
    }
    getMovies(): Promise<Movie[]> {
        throw new Error("Method not implemented.");
    }
    getMovieScreenings(): Promise<MovieScreening[]> {
        throw new Error("Method not implemented.");
    }


}