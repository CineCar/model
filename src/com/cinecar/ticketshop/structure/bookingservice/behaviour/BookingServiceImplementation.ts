import { BookingService } from "./BookingService";
import { Booking, Cart, Ticket, Person } from "com.cinecar.objects";

import { DatabaseConnectorImplementation, DatabaseObjectType } from "com.cinecar.databaseconnector";




export class BookingServiceImplementation implements BookingService{


    private static bookingServiceImplementation: BookingServiceImplementation;





    static getSingleton(): BookingServiceImplementation{

        if(BookingServiceImplementation.bookingServiceImplementation == null){
            BookingServiceImplementation.bookingServiceImplementation = new BookingServiceImplementation();
        }
        
        return BookingServiceImplementation.bookingServiceImplementation;
        

    }

    async addTicketToCart(id: number, ticket: Ticket): Promise<Cart> {

        let cart: Cart = <Cart> await DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Cart);


        let cartTickets: Array<Ticket> = cart.getTickets();

        cartTickets.push(ticket);

        cart.setTickets(cartTickets);


        return <Promise<Cart>> DatabaseConnectorImplementation.getSingleton().update(cart, DatabaseObjectType.Cart);


        


    }
    async cancelBooking(id: number): Promise<Booking> {

        let booking:  Booking = <Booking> await DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Booking);

        booking.setCancelled(true);

        


        return <Promise<Booking>> DatabaseConnectorImplementation.getSingleton().update(booking, DatabaseObjectType.Booking);
    }
    async checkoutCart(id: number, firstname: string, lastname: string): Promise<Booking> {
        let cart: Cart = <Cart> await DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Cart);
        DatabaseConnectorImplementation.getSingleton().delete(id, DatabaseObjectType.Cart);

        let person: Person = new Person();
        person.setFirstname(firstname);
        person.setLastname(lastname);




        let booking: Booking = new Booking();
        booking.setPerson(person);
        booking.setTickets(cart.getTickets());

        return <Promise<Booking>> DatabaseConnectorImplementation.getSingleton().create(booking, DatabaseObjectType.Booking);
    
    }
    getBooking(id: number): Promise<Booking> {
        return <Promise<Booking>> DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Booking);
    }
    getBookings(): Promise<Array<Booking>> {
        return <Promise<Booking[]>> DatabaseConnectorImplementation.getSingleton().getAll(DatabaseObjectType.Booking);
    }
    getCart(id: number): Promise<Cart> {
        
        return <Promise<Cart>> DatabaseConnectorImplementation.getSingleton().get(id, DatabaseObjectType.Cart);
    }

}