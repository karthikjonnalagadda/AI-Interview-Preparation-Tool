import React, { useState } from 'react';
import InterviewForm from '../components/InterviewForm.jsx';
import ResultsCard from '../components/ResultsCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import '../styles/App.css';

const API_URL = import.meta.env.VITE_API_URL || 'https://ai-interview-preparation-tool.onrender.com/';

const Home = () => {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateQuestions = async (data) => {
    setLoading(true);
    setError('');
    setQuestions(null);

    try {
      const response = await fetch(`${API_URL}/generate-questions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error?.message || 'Failed to generate questions');
      }

      setQuestions(result.data.questions);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'An error occurred while generating questions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <header className="header">
        <h1>🎯 AI Interview Preparation Tool</h1>
        <p>Generate role-specific interview questions with model answers and expert tips</p>
      </header>

      <main className="main-content">
        <div className="form-section">
          <InterviewForm onSubmit={handleGenerateQuestions} loading={loading} />
        </div>

        {error && (
          <div className="error-alert">
            <strong>Error:</strong> {error}
          </div>
        )}

        {loading && <LoadingSpinner />}

        {questions && !loading && <ResultsCard questions={questions} />}

        {!questions && !loading && !error && (
          <div className="welcome-message">
            <h2>Ready to prepare?</h2>
            <p>Select a job role and experience level to get started.</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Built with React + Node.js + OpenRouter AI</p>
      </footer>
    </div>
  );
};

export default Home;
