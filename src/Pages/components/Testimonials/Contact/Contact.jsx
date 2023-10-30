import React from 'react';
import './Contact.css'; // Import your CSS file for styling
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import Bootstrap components

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact Us</h1>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={6}>
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 (123) 456-7890</p>
              <p>Address: 123 Main St, City, Country</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;