import { Booking, Ticket, Cart } from "com.cinecar.objects";

export interface BookingService {
    createCart(): Promise<Cart>;
    addTicketToCart(id: number, movieScreeningId: number): Promise<Cart>;
    deleteTicketFromCart(cartId: number, ticketId: number): Promise<Cart>;
    cancelBooking(id: number): Promise<Booking>;
    checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking>;
    getBooking(id: number): Promise<Booking>;
    getBookings(): Promise<Array<Booking>>;
    getCart(id: number): Promise<Cart>;
}
