import { Booking, Cart, MovieScreening, Movie } from "com.cinecar.objects";

export interface TicketShop {
    // MISC
    addTicketToCart(id: number, row: number): void;

    cancelBooking(id: number): void;

    changeMovieInformation(id: number, name: string, duration: number): void;

    changeMovieScreeningInformationInformation(id: number, dateTime: Date): void;

    checkoutCart(id: number, firstname: string, lastname: string): Booking;

    // CREATE
    createMovie(name: string, duration: number): Movie;

    createMovieScreening(movieid: number, dateTime: Date): MovieScreening;

    // DELETE
    deleteMovie(movieid: number): Promise<void>;

    deleteMovieScreening(moviescreeningid: number): void;

    //GETTERS
    getBooking(): Booking;

    getBookings(): Array<Booking>;

    getCart(id: number): Cart;

    getMovie(movieid: number): Promise<Movie>;

    getMovies(): Array<Movie>;

    getMovieScreenings(): Array<MovieScreening>;
}
