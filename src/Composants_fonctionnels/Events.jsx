import { Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
import events from "./data/events.json";
import React, { useEffect } from "react";

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
   const [isShowBuyAlert, setIsShowAlert] = React.useState(false);
   const [isShowWelcomeAlert, setIsShowWelcomeAlert] = React.useState(true);
   const showAlert = () => {
      setIsShowAlert(true);
      setTimeout(() => { //lors de chargement de l'alert elle sera afficher juste 2 secondes (utilisation de setTimeout(() => {}, 2000))
         setIsShowAlert(false);
      }, 2000);
   }

   useEffect(() => {
      //setIsShowWelcomeAlert(true);
      setTimeout(() => {
         setIsShowWelcomeAlert(false);
      }, 3000);
   }, []);
   <>
      {isShowBuyAlert &&
         <Alert variant="success" className="text-center" >
            {/* onLoad : permet de déclencher une action au chargement du composant */}
            <Alert.Heading>You have booked an event</Alert.Heading>
         </Alert>
      }
      {isShowWelcomeAlert &&
         <Alert variant="info" className="text-center">
            <Alert.Heading>Welcome to our events page</Alert.Heading>
         </Alert>
      }
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
                  showAlert={showAlert}
               />

            </Col>

         ))}
      </Row>

   </>
}

export default Events;