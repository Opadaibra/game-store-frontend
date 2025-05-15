import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner, Button } from 'react-bootstrap';

function GameDetail() {
  const { id } = useParams(); // التصحيح هنا
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/games/${id}/`);
        if (!response.ok) {
          throw new Error('Game not found');
        }
        const data = await response.json();
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGame();
    }
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading game details...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <div className="alert alert-danger">{error}</div>
      </Container>
    );
  }

  if (!game) {
    return (
      <Container className="mt-5">
        <div className="alert alert-warning">Game not found</div>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={game.main_image_url} />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${game.price}<br />
            <strong>Release Year:</strong> {game.production_year}<br />
            <strong>Platform:</strong> {game.operating_systems}<br />
            <strong>Description:</strong> {game.description}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
          <Button variant="secondary ms-4" href='/' >
                Back
            </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GameDetail;