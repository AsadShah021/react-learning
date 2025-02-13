import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { blogs } from './Data/blogs';
export function CardsInfo({ items }){
    return (
        <Card style={{ width: '18rem', margin: '6px' }}>
        <Card.Body>
          <Card.Title>{items.title}</Card.Title>
          <Card.Text>
           {items.body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}