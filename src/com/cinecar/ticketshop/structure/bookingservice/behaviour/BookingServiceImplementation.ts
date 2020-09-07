import { BookingService } from "./BookingService";

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
    getBookings(): any[] {
        throw new Error("Method not implemented.");
    }
    getCart(id: number) {
        throw new Error("Method not implemented.");
    }

}