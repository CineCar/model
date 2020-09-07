import { Booking, Ticket, Cart  } from "com.cinecar.objects";

export interface BookingService {


    addTicketToCart(id: number, ticket: Ticket): void;
    cancelBooking(id: number): void;
    checkoutCart(id: number, firstname: string, lastname: string): Booking;
    getBooking(id: number): Booking;
    getBookings(): Array<Booking>;
    getCart(id: number): Cart;
}