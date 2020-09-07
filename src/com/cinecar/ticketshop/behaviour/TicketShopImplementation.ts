import { Booking, Cart, MovieScreening, Movie } from "com.cinecar.objects";
import { TicketShop } from "./TicketShop";

export class TicketShopImplementation implements TicketShop {
    addTicketToCart(id: number, row: number): void {
        throw new Error("Method not implemented.");
    }

    cancelBooking(id: number): void {
        throw new Error("Method not implemented.");
    }

    changeMovieInformation(id: number, string: any, duration: number): void {
        throw new Error("Method not implemented.");
    }

    changeMovieScreeningInformationInformation(id: number, dateTime: Date): void {
        throw new Error("Method not implemented.");
    }

    checkoutCart(id: number, firstname: string, lastname: string): Booking {
        throw new Error("Method not implemented.");
    }

    createMovie(name: string, duration: number): Movie {
        throw new Error("Method not implemented.");
    }

    createMovieScreening(movieid: number, dateTime: Date): MovieScreening {
        throw new Error("Method not implemented.");
    }

    deleteMovie(movieid: number): void {
        throw new Error("Method not implemented.");
    }

    deteteMovieScreening(moviescreeningid: number): void {
        throw new Error("Method not implemented.");
    }

    getBooking(): Booking {
        throw new Error("Method not implemented.");
    }

    getBookings(): any[] {
        throw new Error("Method not implemented.");
    }

    getCart(id: number): Cart {
        throw new Error("Method not implemented.");
    }

    getMovie(movieid: number): Movie {
        throw new Error("Method not implemented.");
    }

    getMovies(): any[] {
        throw new Error("Method not implemented.");
    }

    getMovieScreenings(): any[] {
        throw new Error("Method not implemented.");
    }
}
