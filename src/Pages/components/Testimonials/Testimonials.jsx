import React from 'react';
import './Testimonials.css'; // Import your CSS file for styling
import { Card, Col, Container, Row } from 'react-bootstrap';

function Testimonials() {
  // Define some example testimonials data
  const testimonials = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Great service! I highly recommend this company.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      text: 'The quality of their work is outstanding.',
    },
    {
      id: 3,
      author: 'David Johnson',
      text: 'Very professional and reliable. I m satisfied with their service.',
    },
  ];

  return (
    <div className="testimonials" id='testimonials'>
    <h1>Testimonials</h1>
    <Container>
      <Row>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} xs={12} md={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <Card.Text>{testimonial.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">- {testimonial.author}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  );
}

export default Testimonials;