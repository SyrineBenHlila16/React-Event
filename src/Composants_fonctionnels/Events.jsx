import { Row, Col } from "react-bootstrap";
import Event from "./Event";
import events from "./data/events.json";

function Events() {

   // const eventItems = {
   //    name: "jazz",
   //    imageUrl: "/src/Composants_fonctionnels/images/placeholder.jpg",
   //    price: 50,
   //    nbTickets: 100,
   //    nbParticipants: 80
   // }
   // const [events, setEvents] = react.useState([]);
   // useEffect(() => {
   //    fetch('../data/events.json')
   //       .then((response) => response.json())
   //       .then((json) => setEvents(json));
   // });

   return (
      <>
         <Row>

            {/*
             <Col> 
            <Event
            name="jazz"
            imageUrl="/src/Composants_fonctionnels/images/placeholder.jpg"
            price={50}
            nbTickets={100}
            nbParticipants={80}
             /></Col> */}

            {events.map((event, index) => (
               <Col key={`col-event-${index}`} md={4} className="mb-4">

                  <Event
                     event={event}
                     key={`event-${index}`}
                  />
               </Col>

            ))}
         </Row>

      </>
   );
}
export default Events;