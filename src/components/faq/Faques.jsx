// FAQSection.js
import React, { useState, useEffect } from "react";
import "./faques.css"; // Import your CSS file

const FAQSection = () => {
  const faqData = [
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, Interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "How much will it cost?",
      answer:
        "Registration for DEVCLASH is completely free, Accomodation and food is completely free for shortlisted teams as well.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, Interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, Interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, Interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries, Interest in learning and working with technology is much more important than your current experience level.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    // Add more dummy questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    const closeOpenQuestion = () => {
      if (openIndex !== null) {
        setOpenIndex(null);
      }
    };

    document.body.addEventListener("click", closeOpenQuestion);

    return () => {
      document.body.removeEventListener("click", closeOpenQuestion);
    };
  }, [openIndex]);

  const stopPropagation = (e) => {
    // Stop propagation to prevent the click event from closing the open question
    e.stopPropagation();
  };

  return (
    <div className="faq-section" id="faq">
      <h2 className="domain-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={(e) => stopPropagation(e)}
          >
            <div
              className="question"
              onClick={() => handleQuestionClick(index)}
            >
              {faq.question}
            </div>
            {openIndex === index && <div className="answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
