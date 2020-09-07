import { MovieService } from "./MovieService";
import { Movie, MovieScreening } from "com.cinecar.objects";

import {  DatabaseConnectorImplementation, DatabaseObjectType } from "com.cinecar.databaseconnector";

export class MovieServiceImplementation implements MovieService{

    private static movieServiceImplementation: MovieServiceImplementation;



    static getSingleton(): MovieServiceImplementation{

        if(MovieServiceImplementation.movieServiceImplementation == null){
            MovieServiceImplementation.movieServiceImplementation = new MovieServiceImplementation();
        }

        return MovieServiceImplementation.movieServiceImplementation;
    }




    changeMovieInformation(id: number, name: string, duration: number): Promise<Movie> {

        let movie: Movie = new Movie();
        movie.setId(id);
        movie.setName(name);
        movie.setDuration(duration);

        return <Promise<Movie>> DatabaseConnectorImplementation.getSingleton().update(movie, DatabaseObjectType.Movie);

        

    }
    changeMovieScreeningInformationInformation(id: number, dateTime: Date): Promise<MovieScreening> {

        let movie: Movie = new Movie();
        movie.setId(id);

        let moviescreening: MovieScreening = new MovieScreening();
        moviescreening.setMovie(movie);
        moviescreening.setDatetime(dateTime);

        return <Promise<MovieScreening>> DatabaseConnectorImplementation.getSingleton().update(moviescreening, DatabaseObjectType.MovieScreening);
        
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