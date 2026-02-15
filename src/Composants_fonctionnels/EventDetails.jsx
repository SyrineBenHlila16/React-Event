import { useParams } from "react-router-dom";
import events from "./data/events.json";

export default function EventDetails() {
    const { name } = useParams();

    const event = events.find(e => e.name === name);
    console.log(event);
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
        </div>
    );
}
