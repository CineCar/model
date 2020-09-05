export interface TicketShop {


    //import { Booking } from "module";
    //import { Movie } from "module";
    //import { MovieScreening } from "module";
    //import { Cart } from "module";




    // MISC
    addTicketToCart(id: number, row: number): void;
    cancelBooking(id: number): void;
    changeMovieInformation(id: number, string: name, duration: number): void
    changeMovieScreeningInformationInformation(id: number, dateTime: Date): void;
    checkoutCart(id: number, firstname: string, lastname: string): Booking;

    // CREATE
    createMovie(name: string, duration: number): Movie;
    createMovieScreening(movieid: number, dateTime: Date): MovieScreening;

    // DELETE
    deleteMovie(movieid: number): void;
    deteteMovieScreening(moviescreeningid: number): void;

    //GETTERS
    getBooking(): Booking;
    getBookings(): Array<Booking>;
    getCart(id: number): Cart;
    getMovie(movieid: number): Movie;
    getMovies(): Array<Movie>;
    getMovieScreenings(): Array<MovieScreenings>;









}