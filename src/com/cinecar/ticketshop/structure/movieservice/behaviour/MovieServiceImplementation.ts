import { MovieService } from "./MovieService";
import { Movie, MovieScreening } from "com.cinecar.objects";

import {  DatabaseConnectorImplementation, DatabaseObjectType } from "com.cinecar.databaseconnector";

class MovieServiceImplementation implements MovieService{
    changeMovieInformation(id: number, name: string, duration: number): void {
        throw new Error("Method not implemented.");
    }
    changeMovieScreeningInformationInformation(id: number, dateTime: Date): void {
        throw new Error("Method not implemented.");
    }
    createMovie(name: string, duration: number): Promise<Movie>{
        
        const movie: Movie = new Movie();

        movie.setDuration(duration);
        movie.setName(name);

        return <Promise<Movie>> DatabaseConnectorImplementation.getSingleton().create(movie, DatabaseObjectType.Movie);
    }
    createMovieScreening(movieid: number, dateTime: Date): MovieScreening {
        throw new Error("Method not implemented.");
    }
    deleteMovie(movieid: number): Promise<void> {


        return DatabaseConnectorImplementation.getSingleton().delete(movieid, DatabaseObjectType.Movie);

    }
    deteteMovieScreening(moviescreeningid: number): void {
        throw new Error("Method not implemented.");
    }
    getMovie(movieid: number): Movie {
        throw new Error("Method not implemented.");
    }
    getMovies(): import("com.cinecar.objects").Movie[] {
        throw new Error("Method not implemented.");
    }
    getMovieScreenings(): import("com.cinecar.objects").MovieScreening[] {
        throw new Error("Method not implemented.");
    }


}