import { BookingService } from "./BookingService";
import { Booking, Cart, Ticket, Person, MovieScreening } from "com.cinecar.objects";

import { DatabaseConnectorImplementation, DatabaseObjectType } from "com.cinecar.databaseconnector";

export class BookingServiceImplementation implements BookingService {
    private static bookingServiceImplementation: BookingServiceImplementation;

    static getSingleton(): BookingServiceImplementation {
        if (BookingServiceImplementation.bookingServiceImplementation == null) {
            BookingServiceImplementation.bookingServiceImplementation = new BookingServiceImplementation();
        }

        return BookingServiceImplementation.bookingServiceImplementation;
    }

    public createCart(): Promise<Cart> {
        return <Promise<Cart>>(
            DatabaseConnectorImplementation.getSingleton().create(new Cart(), DatabaseObjectType.Cart)
        );
    }

    async addTicketToCart(id: number, movieScreeningId: number, row: number): Promise<Cart> {
        let cart: Cart = <Cart>await DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Cart);

        let cartTickets: Array<Ticket> = cart.getTickets();

        const movieScreening = new MovieScreening();
        movieScreening.setId(movieScreeningId);

        let ticket: Ticket = new Ticket();
        ticket.setRow(row);
        ticket.setMovieScreening(movieScreening);

        ticket = <Ticket>await DatabaseConnectorImplementation.getSingleton().create(ticket, DatabaseObjectType.Ticket);

        cartTickets.push(ticket);
        cart.setTickets(cartTickets);

        return <Promise<Cart>>DatabaseConnectorImplementation.getSingleton().update(cart, DatabaseObjectType.Cart);
    }

    async cancelBooking(id: number): Promise<Booking> {
        let booking: Booking = <Booking>(
            await DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Booking)
        );

        booking.setCancelled(true);

        return <Promise<Booking>>(
            DatabaseConnectorImplementation.getSingleton().update(booking, DatabaseObjectType.Booking)
        );
    }

    async checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking> {
        let cart: Cart = <Cart>await DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Cart);
        DatabaseConnectorImplementation.getSingleton().delete(id, DatabaseObjectType.Cart);

        let person: Person = new Person();
        person.setFirstname(firstname);
        person.setLastname(lastname);

        person = <Person>await DatabaseConnectorImplementation.getSingleton().create(person, DatabaseObjectType.Person);

        let booking: Booking = new Booking();
        booking.setPerson(person);
        booking.setTickets(cart.getTickets());

        return <Promise<Booking>>(
            DatabaseConnectorImplementation.getSingleton().create(booking, DatabaseObjectType.Booking)
        );
    }

    getBooking(id: number): Promise<Booking> {
        return <Promise<Booking>>DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Booking);
    }

    getBookings(): Promise<Array<Booking>> {
        return <Promise<Booking[]>>DatabaseConnectorImplementation.getSingleton().getAll(DatabaseObjectType.Booking);
    }

    getCart(id: number): Promise<Cart> {
        return <Promise<Cart>>DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Cart);
    }
}
