

import { useState, useEffect } from 'react';
import {  Row, Col ,Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import noimg from '../../assets/noimg.svg';

export function CompaniesPage() {
    const [companies, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch games from Django API  
        fetch('http://localhost:8000/api/companies/')
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
        <div >
            <h2>Featured Games</h2>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <Row className='g-4'>
                    {companies.map((company) => (
                        <Col key={company.id} sm={6} md={4} lg={4} className="d-flex">
                            <Card className='flex-fill text-center d-flex align-items-center'>
                                <Card.Img
                                    className="p-2"
                                    variant="center" src={company.logo ?? noimg}
                                    style={{
                                        width: company.logo ? '100%' : '80%',
                                        objectFit:'contain',
                                        height:'100%'
                                        // Add other conditional styles here
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{company.name}</Card.Title>
                                    <Card.Text>
                                        {company.founded_year}<br />
                                    </Card.Text>
                                    {/* <Button variant="primary">View Details</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

