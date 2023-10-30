// Navigation.js
import React from 'react';

function Navigation({ sections }) {
  return (
    <section className='container'>
<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="mx-auto">
        <a className="navbar-brand" href="#">My Landing Page</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {sections.map((section, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </section>
  );
}

export default Navigation;