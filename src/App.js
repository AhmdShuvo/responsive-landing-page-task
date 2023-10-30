// App.js
import React from 'react';
import Navigation from './Pages/components/NavBar/Navigation';
import Slider from './Pages/components/Slider';
import Footer from './Pages/components/Footer';
import AboutUs from './Pages/components/AboutUs/AboutUs';
import Services from './Pages/components/AboutUs/Services/Service';


const sections = [
  {
    id: 'about',
    title: 'About Us',
    content: 'We are a creative team dedicated to delivering quality products and services.',
  },
  {
    id: 'services',
    title: 'Our Services',
    content: 'Our services include web development, graphic design, and digital marketing.',
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    content: 'See what our satisfied customers have to say about our work.',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    content: 'Browse our portfolio to see examples of our previous projects.',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: 'Feel free to get in touch with us for inquiries or collaborations.',
  },
  {
    id: 'blog',
    title: 'Blog',
    content: 'Read our latest blog posts to stay updated on industry trends.',
  },
  {
    id: 'faq',
    title: 'FAQ',
    content: 'Answers to frequently asked questions about our services.',
  },
  {
    id: 'team',
    title: 'Join Our Team',
    content: 'Explore career opportunities and join our dynamic team.',
  },
];

function App() {
  return (
    <div>
      <Navigation sections={sections} />
      {
        sections.map((section,index)=>{
<section key={index} title={section.title} content={section.content} id={section.id}/>
        })
    
      }
      <Services/>
      <AboutUs/>
      <Slider /> {/* Add the slider component here */}
      <Footer />
    </div>
  );
}

export default App;
