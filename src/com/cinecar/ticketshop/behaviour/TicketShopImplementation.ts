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

    checkoutCart(id: number, firstname: string, lastname: string) {
        throw new Error("Method not implemented.");
    }

    createMovie(name: string, duration: number) {
        throw new Error("Method not implemented.");
    }

    createMovieScreening(movieid: number, dateTime: Date) {
        throw new Error("Method not implemented.");
    }

    deleteMovie(movieid: number): void {
        throw new Error("Method not implemented.");
    }

    deteteMovieScreening(moviescreeningid: number): void {
        throw new Error("Method not implemented.");
    }

    getBooking() {
        throw new Error("Method not implemented.");
    }

    getBookings(): any[] {
        throw new Error("Method not implemented.");
    }

    getCart(id: number) {
        throw new Error("Method not implemented.");
    }

    getMovie(movieid: number) {
        throw new Error("Method not implemented.");
    }

    getMovies(): any[] {
        throw new Error("Method not implemented.");
    }

    getMovieScreenings(): any[] {
        throw new Error("Method not implemented.");
    }
}
