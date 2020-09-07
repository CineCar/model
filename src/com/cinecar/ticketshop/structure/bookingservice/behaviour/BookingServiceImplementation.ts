import { BookingService } from "./BookingService";
import { Booking, Cart } from "com.cinecar.objects";

export class BookingServiceImplementation implements BookingService{
    addTicketToCart(id: number, ticket: any): void {
        throw new Error("Method not implemented.");
    }
    cancelBooking(id: number): void {
        throw new Error("Method not implemented.");
    }
    checkoutCart(id: number, firstname: string, lastname: string): Booking {
        throw new Error("Method not implemented.");
    }
    getBooking(id: number): Booking {
        throw new Error("Method not implemented.");
    }
    getBookings(): Array<Booking> {
        throw new Error("Method not implemented.");
    }
    getCart(id: number): Cart {
        throw new Error("Method not implemented.");
    }

}