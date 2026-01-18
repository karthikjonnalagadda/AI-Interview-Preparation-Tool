import React from 'react';
import './ResultsCard.css';

const ResultsCard = ({ questions }) => {
  return (
    <div className="results-container">
      <h2 className="results-title">Interview Questions & Answers</h2>
      {questions.map((item, index) => (
        <div key={index} className="question-card">
          <div className="question-number">Q{index + 1}</div>
          
          <div className="card-section">
            <h3 className="section-title">Question</h3>
            <p className="section-content">{item.question}</p>
          </div>

          <div className="card-section">
            <h3 className="section-title">Model Answer</h3>
            <p className="section-content">{item.model_answer}</p>
          </div>

          <div className="card-section">
            <h3 className="section-title">Interview Tips</h3>
            <p className="section-content">{item.interview_tips}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsCard;
