
import { useState, useEffect, } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import noimg from '../../assets/noimg.svg';
import { Link, NavLink } from 'react-router-dom';
import { forwardRef } from 'react';
export function GamesPage() {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch games from Django API  
        fetch('http://localhost:8000/api/games/')
            .then(response => response.json())
            .then(data => {
                setGames(data);
                console.log(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching games:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>Featured Games</h2>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <Row className='g-4'>
                    {games.map((game) => (
                        <Col key={game.id} sm={6} md={4} lg={4} className="d-flex">
                            <Card className='flex-fill text-center d-flex align-items-center'>
                                <Card.Img
                                    className="card_img"
                                    variant="center" src={game.main_image_url ?? noimg}
                                    style={{
                                        width: game.main_image_url ? '100%' : '80%',
                                        // Add other conditional styles here
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{game.name}</Card.Title>
                                    <Card.Text>
                                        ${game.price}<br />
                                        {game.company.name}
                                    </Card.Text>

                                    <Button variant="primary">
                                        <Link to={`/games/${game.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            View Details
                                        </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

