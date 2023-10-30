// AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us" id='about'>
      <div className="container">
        <h1 className="fade-in">About Us</h1>
        <p className="fade-in">
          We are a creative team dedicated to delivering quality products and services. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="row">
          <div className="col-md-6 fade-in">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide innovative solutions to our clients' needs while maintaining the highest level of quality and customer satisfaction.
            </p>
          </div>
          <div className="col-md-6 fade-in">
            <h2>Our Team</h2>
            <p>
              Our team consists of talented individuals with diverse skills and expertise in various domains, ensuring the success of every project we undertake.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 fade-in">
            <h2>Our Values</h2>
            <p>
              We value integrity, creativity, and teamwork. These principles drive our work and guide our interactions with clients and partners.
            </p>
          </div>
          <div className="col-md-6 fade-in">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be a leader in delivering cutting-edge solutions that make a positive impact on businesses and communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;