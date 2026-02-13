import { useParams, Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import eventsData from "./data/events.json";

function EventDetails() {
    const { name } = useParams();
    const eventName = decodeURIComponent(name);

    const event = eventsData.find(e => e.name === eventName);

    if (!event) {
        return (
            <Container className="text-center mt-5">
                <h2>Événement non trouvé</h2>
                <Link to="/">Retour à l'accueil</Link>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <Card.Img
                        variant="top"
                        src={`src/Composants_fonctionnels/images/${event.img}`}
                        alt={event.name}
                        style={{ width: '100%', borderRadius: '8px' }}
                    />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title as="h1">{event.name}</Card.Title>
                            <Card.Text>{event.description}</Card.Text>
                            <hr />
                            <p><strong>Prix :</strong> {event.price} DT</p>
                            <p><strong>Participants :</strong> {event.nbParticipants}</p>
                            <p><strong>Billets disponibles :</strong> {event.nbTickets}</p>
                            <Button
                                variant="primary"
                                size="lg"
                                disabled={event.nbTickets === 0}
                            >
                                {event.nbTickets === 0 ? 'Complet' : 'Réserver maintenant'}
                            </Button>
                            <Link to="/" className="btn btn-secondary ms-2">
                                Retour
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default EventDetails;