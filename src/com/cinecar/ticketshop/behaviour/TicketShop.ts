import { Booking, Cart, MovieScreening, Movie } from "com.cinecar.objects";

export interface TicketShop {
    // MISC
    addTicketToCart(id: number, row: number): Promise<void>;

    cancelBooking(id: number): Promise<void>;

    changeMovieInformation(id: number, name: string, duration: number): Promise<Movie>;

    changeMovieScreeningInformationInformation(id: number, dateTime: Date): Promise<MovieScreening>;

    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking>;

    // CREATE
    createMovie(name: string, duration: number): Promise<Movie>;

    createMovieScreening(movieid: number, dateTime: Date): Promise<MovieScreening>;

    // DELETE
    deleteMovie(movieid: number): Promise<void>;

    deleteMovieScreening(moviescreeningid: number): Promise<void>;

    //GETTERS
    getBooking(): Promise<Booking>;

    getBookings(): Promise<Array<Booking>>;

    getCart(id: number): Promise<Cart>;

    getMovie(movieid: number): Promise<Movie>;

    getMovies(): Promise<Array<Movie>>;

    getMovieScreenings(): Promise<Array<MovieScreening>>;
}
