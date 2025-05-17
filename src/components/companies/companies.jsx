

import { useState, useEffect } from 'react';
import {  Row, Col ,Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import noimg from '../../assets/noimg.svg';
import { fetchCompanies } from '../../services/CompaniesService';

export function CompaniesPage() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCompanies = async () => {
            try {
                const data = await fetchCompanies();
                setCompanies(data);
                setLoading(false);
            } catch (error) {
                console.error('Error in Company Page:', error);
                setLoading(false);
            }
        };
        loadCompanies();
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

