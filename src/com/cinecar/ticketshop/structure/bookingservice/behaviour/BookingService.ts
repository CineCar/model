import { Booking, Ticket, Cart  } from "com.cinecar.objects";

export interface BookingService {


    addTicketToCart(id: number, ticket: Ticket): Promise<void>;
    cancelBooking(id: number): Promise<void>;
    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking>;
    getBooking(id: number): Promise<Booking>;
    getBookings(): Promise<Array<Booking>>;
    getCart(id: number): Promise<Cart>;
}