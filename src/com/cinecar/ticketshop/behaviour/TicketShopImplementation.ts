import { Booking, Cart, MovieScreening, Movie, Ticket } from "com.cinecar.objects";
import { TicketShop } from "./TicketShop";
import { BookingServiceImplementation } from "../structure/bookingservice/behaviour/BookingServiceImplementation";
import { MovieServiceImplementation } from "../structure/movieservice/behaviour/MovieServiceImplementation";
import { AuthenticationServiceImplementation } from "../structure/authenticationservice/behaviour/AuthenticationServiceImplementation";

export class TicketShopImplementation implements TicketShop {
    private static ticketShop: TicketShop;

    public static getSingleton(): TicketShop {
        if (TicketShopImplementation.ticketShop == null) {
            TicketShopImplementation.ticketShop = new TicketShopImplementation();
        }

        return TicketShopImplementation.ticketShop;
    }

    createCart(): Promise<Cart> {
        return BookingServiceImplementation.getSingleton().createCart();
    }

    addTicketToCart(id: number, movieScreeningId: number): Promise<Cart> {
        return BookingServiceImplementation.getSingleton().addTicketToCart(id, movieScreeningId);
    }

    deleteTicketFromCart(cartId: number, ticketId: number): Promise<Cart> {
        return BookingServiceImplementation.getSingleton().deleteTicketFromCart(cartId, ticketId);
    }

    cancelBooking(id: number): Promise<Booking> {
        return BookingServiceImplementation.getSingleton().cancelBooking(id);
    }

    changeMovieInformation(
        id: number,
        name: string,
        duration: number,
        price: number,
        imageUrl: string
    ): Promise<Movie> {
        return MovieServiceImplementation.getSingleton().changeMovieInformation(id, name, duration, price, imageUrl);
    }

    changeMovieScreeningInformation(id: number, dateTime: Date): Promise<MovieScreening> {
        return MovieServiceImplementation.getSingleton().changeMovieScreeningInformation(id, dateTime);
    }

    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking> {
        return BookingServiceImplementation.getSingleton().checkoutCart(id, firstname, lastname);
    }

    createMovie(name: string, duration: number, price: number, imageUrl: string): Promise<Movie> {
        return MovieServiceImplementation.getSingleton().createMovie(name, duration, price, imageUrl);
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

    getMovies(): Promise<Array<Movie>> {
        return MovieServiceImplementation.getSingleton().getMovies();
    }

    getMovieScreenings(): Promise<Array<MovieScreening>> {
        return MovieServiceImplementation.getSingleton().getMovieScreenings();
    }

    searchMovies(query: string): Promise<Array<Movie>> {
        return MovieServiceImplementation.getSingleton().searchMovies(query);
    }

    filterMovieScreenings(start: Date, end: Date): Promise<Array<MovieScreening>> {
        return MovieServiceImplementation.getSingleton().filterMovieScreenings(start, end);
    }

    loginUser(id: number, password: String): Promise<any> {
        return AuthenticationServiceImplementation.getSingleton().loginUser(id, password);
    }

    verifySession(id: number, token: String): Promise<void> {
        return AuthenticationServiceImplementation.getSingleton().verifySession(id, token);
    }
}
