import { MovieService } from "./MovieService";
import { Movie, MovieScreening } from "com.cinecar.objects";

import { DatabaseConnectorImplementation, DatabaseObjectType } from "com.cinecar.databaseconnector";

export class MovieServiceImplementation implements MovieService {
    private static movieServiceImplementation: MovieServiceImplementation;

    static getSingleton(): MovieServiceImplementation {
        if (MovieServiceImplementation.movieServiceImplementation == null) {
            MovieServiceImplementation.movieServiceImplementation = new MovieServiceImplementation();
        }

        return MovieServiceImplementation.movieServiceImplementation;
    }

    changeMovieInformation(
        id: number,
        name: string,
        duration: number,
        price: number,
        imageUrl: string
    ): Promise<Movie> {
        let movie: Movie = new Movie();
        movie.setId(id);
        movie.setName(name);
        movie.setDuration(duration);
        movie.setPrice(price);
        movie.setImageUrl(imageUrl);

        return <Promise<Movie>>DatabaseConnectorImplementation.getSingleton().update(movie, DatabaseObjectType.Movie);
    }

    changeMovieScreeningInformation(id: number, dateTime: Date): Promise<MovieScreening> {
        let movie: Movie = new Movie();
        movie.setId(id);

        let moviescreening: MovieScreening = new MovieScreening();
        moviescreening.setMovie(movie);
        moviescreening.setDatetime(dateTime);

        return <Promise<MovieScreening>>(
            DatabaseConnectorImplementation.getSingleton().update(moviescreening, DatabaseObjectType.MovieScreening)
        );
    }

    createMovie(name: string, duration: number, price: number, imageUrl: string): Promise<Movie> {
        const movie: Movie = new Movie();

        movie.setDuration(duration);
        movie.setName(name);
        movie.setPrice(price);
        movie.setImageUrl(imageUrl);

        return <Promise<Movie>>DatabaseConnectorImplementation.getSingleton().create(movie, DatabaseObjectType.Movie);
    }

    createMovieScreening(movieId: number, dateTime: Date): Promise<MovieScreening> {
        const moviescreening: MovieScreening = new MovieScreening();

        let movie: Movie = new Movie();
        movie.setId(movieId);

        moviescreening.setMovie(movie);
        moviescreening.setDatetime(dateTime);

        return <Promise<MovieScreening>>(
            DatabaseConnectorImplementation.getSingleton().create(moviescreening, DatabaseObjectType.MovieScreening)
        );
    }

    deleteMovie(movieId: number): Promise<void> {
        return DatabaseConnectorImplementation.getSingleton().delete(movieId, DatabaseObjectType.Movie);
    }

    deleteMovieScreening(moviescreeningid: number): Promise<void> {
        return DatabaseConnectorImplementation.getSingleton().delete(
            moviescreeningid,
            DatabaseObjectType.MovieScreening
        );
    }

    getMovie(movieId: number): Promise<Movie> {
        return <Promise<Movie>>DatabaseConnectorImplementation.getSingleton().get(movieId, DatabaseObjectType.Movie);
    }

    getMovies(): Promise<Movie[]> {
        return <Promise<Movie[]>>DatabaseConnectorImplementation.getSingleton().getAll(DatabaseObjectType.Movie);
    }

    getMovieScreenings(): Promise<MovieScreening[]> {
        return <Promise<MovieScreening[]>>(
            DatabaseConnectorImplementation.getSingleton().getAll(DatabaseObjectType.MovieScreening)
        );
    }
}
