import { Booking, Cart, MovieScreening, Movie, Ticket, Session } from "com.cinecar.objects";

export interface TicketShop {
    // MISC

    createCart(): Promise<Cart>;

    addTicketToCart(id: number, movieScreeningId: number): Promise<Cart>;

    cancelBooking(id: number): Promise<Booking>;

    changeMovieInformation(id: number, name: string, duration: number, price: number, imageUrl: string): Promise<Movie>;

    changeMovieScreeningInformation(id: number, dateTime: Date): Promise<MovieScreening>;

    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking>;

    // CREATE
    createMovie(name: string, duration: number, price: number, imageUrl: string): Promise<Movie>;

    createMovieScreening(movieid: number, dateTime: Date): Promise<MovieScreening>;

    // DELETE
    deleteMovie(movieid: number): Promise<void>;

    deleteMovieScreening(moviescreeningid: number): Promise<void>;

    //GETTERS
    getBooking(id: number): Promise<Booking>;

    getBookings(): Promise<Array<Booking>>;

    getCart(id: number): Promise<Cart>;

    getMovie(movieid: number): Promise<Movie>;

    getMovies(): Promise<Array<Movie>>;

    getMovieScreenings(): Promise<Array<MovieScreening>>;

    // AUTHENTICATION

    loginUser(id: number, password: String): Promise<Session>;

    verifySession(id: number, token: String): Promise<void>;
}
