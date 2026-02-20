import { useParams } from "react-router-dom";
//import events from "./data/events.json";
import React, { useEffect } from "react";
import { getEventByName } from "./service/Api";

export default function EventDetails() {
    const { name } = useParams();

    //const event = events.find(e => e.name === name);
    const [event, setEvent] = React.useState(null);
    useEffect(() => {
        getEventByName(name)
            .then(event => {
                setEvent(event.data[0]);
                console.log(event.data[0]);
            })
            .catch(error => {
                console.error("Error fetching event details:", error);
            });
    }, [name]);

    if (!event) {
        return <h2>Event not found</h2>;
    }

    return (
        <div>
            <h2>{event.name}</h2>
            <img
                src={`src/Composants_fonctionnels/images/${event.img}`}
                width="300"
                alt={event.name}
            />
            <p>{event.description}</p>
            <p>Price: {event.price} DT</p>
            <p>Number of Tickets: {event.nbTickets}</p>

        </div>
    );
}
