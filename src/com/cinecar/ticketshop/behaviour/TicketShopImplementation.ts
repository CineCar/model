import { Booking, Cart, MovieScreening, Movie } from "com.cinecar.objects";
import { TicketShop } from "./TicketShop";
import { BookingService } from "../structure/bookingservice/behaviour/BookingService";
import { MovieService } from "../structure/movieservice/behaviour/MovieService";


export class TicketShopImplementation implements TicketShop {
    addTicketToCart(id: number, row: number): Promise<Cart> {
        
    }

    cancelBooking(id: number): Promise<Booking> {
        throw new Error("Method not implemented.");
    }

    changeMovieInformation(id: number, string: any, duration: number): Promise<Movie> {
        throw new Error("Method not implemented.");
    }

    changeMovieScreeningInformationInformation(id: number, dateTime: Date): Promise<MovieScreening> {
        throw new Error("Method not implemented.");
    }

    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking> {
        throw new Error("Method not implemented.");
    }

    createMovie(name: string, duration: number): Promise<Movie> {
        throw new Error("Method not implemented.");
    }

    createMovieScreening(movieid: number, dateTime: Date): Promise<MovieScreening> {
        throw new Error("Method not implemented.");
    }

    deleteMovie(movieid: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    deleteMovieScreening(moviescreeningid: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getBooking(): Promise<Booking> {
        throw new Error("Method not implemented.");
    }

    getBookings(): Promise<Booking[]> {
        throw new Error("Method not implemented.");
    }

    getCart(id: number): Promise<Cart> {
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
