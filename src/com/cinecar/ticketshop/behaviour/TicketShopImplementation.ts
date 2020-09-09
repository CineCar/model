import { Booking, Cart, MovieScreening, Movie, Ticket } from "com.cinecar.objects";
import { TicketShop } from "./TicketShop";
import { BookingService } from "../structure/bookingservice/behaviour/BookingService";
import { MovieService } from "../structure/movieservice/behaviour/MovieService";
import { BookingServiceImplementation } from "../structure/bookingservice/behaviour/BookingServiceImplementation";
import { MovieServiceImplementation } from "../structure/movieservice/behaviour/MovieServiceImplementation";
import { AuthenticationServiceImplementation } from "../structure/authenticationservice/behaviour/AuthenticationServiceImplementation";

export class TicketShopImplementation implements TicketShop {
    addTicketToCart(id: number, ticket: Ticket): Promise<Cart> {
        return BookingServiceImplementation.getSingleton().addTicketToCart(id, ticket);
    }

    cancelBooking(id: number): Promise<Booking> {
        return BookingServiceImplementation.getSingleton().cancelBooking(id);
    }

    changeMovieInformation(id: number, name: string, duration: number): Promise<Movie> {
        return MovieServiceImplementation.getSingleton().changeMovieInformation(id, name, duration);
    }

    changeMovieScreeningInformation(id: number, dateTime: Date): Promise<MovieScreening> {
        return MovieServiceImplementation.getSingleton().changeMovieScreeningInformation(id, dateTime);
    }

    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking> {
        return BookingServiceImplementation.getSingleton().checkoutCart(id, firstname, lastname);
    }

    createMovie(name: string, duration: number): Promise<Movie> {
        return MovieServiceImplementation.getSingleton().createMovie(name, duration);
    }

    createMovieScreening(movieid: number, dateTime: Date): Promise<MovieScreening> {
        return MovieServiceImplementation.getSingleton().createMovieScreening(movieid, dateTime);
    }

    deleteMovie(movieid: number): Promise<void> {
        return MovieServiceImplementation.getSingleton().deleteMovie(movieid);
    }

    deleteMovieScreening(moviescreeningid: number): Promise<void> {
        return MovieServiceImplementation.getSingleton().deleteMovieScreening(moviescreeningid);
    }

    getBooking(id: number): Promise<Booking> {
        return BookingServiceImplementation.getSingleton().getBooking(id);
    }

    getBookings(): Promise<Booking[]> {
        return BookingServiceImplementation.getSingleton().getBookings();
    }

    getCart(id: number): Promise<Cart> {
        return BookingServiceImplementation.getSingleton().getCart(id);
    }

    getMovie(movieid: number): Promise<Movie> {
        return MovieServiceImplementation.getSingleton().getMovie(movieid);
    }

    getMovies(): Promise<Movie[]> {
        return MovieServiceImplementation.getSingleton().getMovies();
    }

    getMovieScreenings(): Promise<MovieScreening[]> {
        return MovieServiceImplementation.getSingleton().getMovieScreenings();
    }

    loginUser(id: number, password: String): Promise<any> {
        return AuthenticationServiceImplementation.getSingleton().loginUser(id, password);
    }

    verifySession(id: number, token: String): Promise<boolean> {
        return AuthenticationServiceImplementation.getSingleton().verifySession(id, token);
    }
}
