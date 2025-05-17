import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export function Cart() {
    const cart = useSelector((state) => state.cart); // Get cart state from Redux


  return (
    <Card style={{ width: '18rem',height:'18rem' }}>
    <Card.Body>
        <Card.Title>Your Cart</Card.Title>
        <Card.Text>
        {cart.map((game) => (
        <div key={game.id}>{game.name}</div>
      ))}
        </Card.Text>
        <Button variant="primary">شراء الآن</Button>
    </Card.Body>
</Card>
    
  );
}