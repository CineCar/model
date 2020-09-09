import { Booking, Ticket, Cart } from "com.cinecar.objects";

export interface BookingService {
    addTicketToCart(id: number, movieScreeningId: number, row: number): Promise<Cart>;
    cancelBooking(id: number): Promise<Booking>;
    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking>;
    getBooking(id: number): Promise<Booking>;
    getBookings(): Promise<Array<Booking>>;
    getCart(id: number): Promise<Cart>;
}
