import { Booking, Cart, MovieScreening, Movie, Ticket } from "com.cinecar.objects";
import { TicketShop } from "./TicketShop";
import { BookingService } from "../structure/bookingservice/behaviour/BookingService";
import { MovieService } from "../structure/movieservice/behaviour/MovieService";
import { BookingServiceImplementation } from "../structure/bookingservice/behaviour/BookingServiceImplementation";
import { MovieServiceImplementation } from "../structure/movieservice/behaviour/MovieServiceImplementation";


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
        return BookingServiceImplementation.getSingleton().
    }

    createMovie(name: string, duration: number): Promise<Movie> {
        return BookingServiceImplementation.getSingleton().
    }

    createMovieScreening(movieid: number, dateTime: Date): Promise<MovieScreening> {
        return BookingServiceImplementation.getSingleton().
    }

    deleteMovie(movieid: number): Promise<void> {
        return BookingServiceImplementation.getSingleton().
    }

    deleteMovieScreening(moviescreeningid: number): Promise<void> {
        return BookingServiceImplementation.getSingleton().
    }

    getBooking(): Promise<Booking> {
        return BookingServiceImplementation.getSingleton().
    }

    getBookings(): Promise<Booking[]> {
        return BookingServiceImplementation.getSingleton().
    }

    getCart(id: number): Promise<Cart> {
        return BookingServiceImplementation.getSingleton().
    }

    getMovie(movieid: number): Promise<Movie> {
        return BookingServiceImplementation.getSingleton().
    }

    getMovies(): Promise<Movie[]> {
        return BookingServiceImplementation.getSingleton().
    }

    getMovieScreenings(): Promise<MovieScreening[]> {
        return BookingServiceImplementation.getSingleton().
    }
}
