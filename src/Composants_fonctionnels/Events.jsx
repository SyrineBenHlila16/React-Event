import { Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
//import events from "./data/events.json";
import React, { useEffect } from "react";
import { addEvent } from "./service/Api";
import { NavLink, useNavigate } from "react-router-dom";
import AddEvent from "./AddEvent";
import useEventStore from "./ZustandStores/useEventStore";

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
   //const [events, setEvents] = React.useState([]);

   const [showAddForm, setShowAddForm] = React.useState(false);
   const events = useEventStore((state) => state.events);
   const fetchEvents = useEventStore.getState().fetchEvents;
   const addEventObject = useEventStore((state) => state.addEventObject);
   // const { addEventObject } = useEventStore((state) => ({
   //    addEventObject: state.addEventObject
   // }));
   // const deleteEventObject = useEventStore((state) => state.deleteEventObject);
   const navigate = useNavigate();
   // const favorites = useEventStore((state) => state.favorites);
   // const fetchFavorites = useEventStore.getState().fetchFavorites; //fetchFavorites
   const showAlert = () => {
      setIsShowAlert(true);
      setTimeout(() => {
         setIsShowAlert(false);
      }, 2000);
   }

   useEffect(() => {
      //setIsShowWelcomeAlert(true);
      setTimeout(() => {
         setIsShowWelcomeAlert(false);
      }, 3000);
   }, []);

   useEffect(() => {
      // const getEvents = async () => {
      //    const response = await getallEvents();
      //    setEvents(response.data);
      // };
      // getEvents();
      fetchEvents()
   }, []);
   const handleEventAdded = async (newEvent) => {
      try {
         const response = await addEvent(newEvent);
         // Met à jour la liste des événements avec le nouvel événement ajouté
         //setEvents((prev) => [...prev, response.data]); 
         setShowAddForm(false);
         addEventObject(response.data);
      } catch (err) {
         console.error(err);
      }
   }
   // useEffect(() => {
   //    fetchFavorites();
   // }, []);

   return (
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
         {showAddForm && <AddEvent onEventAdded={handleEventAdded} />}
         <button onClick={() => navigate('/events/add')}>Add Event</button>
         <Row>
            {events.map((event, { index }) => (
               <Col key={`col-event-${index}`} xs={12} sm={6} md={4} className="mb-4">

                  <Event
                     event={event}
                     key={`event-${index}`}
                     showAlert={showAlert}
                  />

               </Col>

            ))}
         </Row>
         {/* <h2>⭐ Mes Favoris</h2>
         {favorites.length === 0 ? (
            <p>Aucun événement en favori.</p>
         ) : (
            <Row>
               {favorites.map((event, index) => (
                  <Col key={`fav-col-${event.id || index}`} xs={12} sm={6} md={4} className="mb-4">
                     <Event
                        event={event}
                        showAlert={showAlert}
                     />
                  </Col>
               ))}
            </Row>
         )} */}
      </>
   )
}

export default Events;