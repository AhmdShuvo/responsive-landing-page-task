// Services.js
import React, { useEffect, useState } from 'react';
import './Services.css';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services data from JSON file
    fetch('/services.json') // Update the path to your JSON file
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="services" id='services'>
      <div className="container">
        <h2 className="fade-in">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card service fade-in">
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;