import { BookingService } from "./BookingService";
import { Booking } from "com.cinecar.objects";

export class BookingServiceImplementation implements BookingService{
    addTicketToCart(id: number, ticket: any): void {
        throw new Error("Method not implemented.");
    }
    cancelBooking(id: number): void {
        throw new Error("Method not implemented.");
    }
    checkoutCart(id: number, firstname: string, lastname: string) {
        throw new Error("Method not implemented.");
    }
    getBooking(id: number) {
        throw new Error("Method not implemented.");
    }
    getBookings(): Array<Booking> {
        throw new Error("Method not implemented.");
    }
    getCart(id: number) {
        throw new Error("Method not implemented.");
    }

}