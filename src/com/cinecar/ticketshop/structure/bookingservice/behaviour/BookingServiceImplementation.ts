import { BookingService } from "./BookingService";
import { Booking, Cart } from "com.cinecar.objects";

export class BookingServiceImplementation implements BookingService{
    addTicketToCart(id: number, ticket: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    cancelBooking(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking> {
        throw new Error("Method not implemented.");
    }
    getBooking(id: number): Promise<Booking> {
        throw new Error("Method not implemented.");
    }
    getBookings(): Promise<Array<Booking>> {
        throw new Error("Method not implemented.");
    }
    getCart(id: number): Promise<Cart> {
        throw new Error("Method not implemented.");
    }

}