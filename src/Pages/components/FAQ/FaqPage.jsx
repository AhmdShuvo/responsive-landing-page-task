import React, { useState } from 'react';
import './FaqPage.css'; // Import your CSS file
import 'animate.css'; // Import animate.css for animations

const FaqPage = () => {
    const [faqs, setFaqs] = useState([
        {
          question: 'What is React?',
          answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
          question: 'How do I install React?',
          answer: 'You can install React using npm or yarn. Run `npm install react` or `yarn add react`.',
        },
        {
          question: 'What are React components?',
          answer: 'React components are reusable building blocks for UI elements.',
        },
        {
          question: 'How do I create a new React component?',
          answer: 'You can create a new component by defining a function or class and rendering it in your application.',
        },
        {
          question: 'What is JSX in React?',
          answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files.',
        },
        // Add more FAQ items here
      ]);

  const toggleAccordion = (index) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].expanded = !faqs[index].expanded;
    setFaqs(updatedFaqs);
  };

  return (
    <div className="faq-page" id='faq'>
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${faq.expanded ? 'open' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              {faq.question}
              <i className="fa fa-angle-down" />
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
