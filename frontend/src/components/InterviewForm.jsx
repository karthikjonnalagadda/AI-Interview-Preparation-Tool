import React, { useState } from 'react';
import './InterviewForm.css';

const InterviewForm = ({ onSubmit, loading }) => {
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [error, setError] = useState('');

  const roles = [
    'QA Intern',
    'Frontend Developer',
    'Backend Developer',
    'Data Analyst',
    'Full Stack Developer',
    'DevOps Engineer',
    'Mobile Developer',
    'UI/UX Designer',
  ];

  const experiences = ['Fresher', 'Junior', 'Mid-level'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!role || !experience) {
      setError('Please select both role and experience level');
      return;
    }

    onSubmit({ role, experience });
  };

  return (
    <form className="interview-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="role">Job Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          disabled={loading}
        >
          <option value="">Select a job role</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="experience">Experience Level</label>
        <select
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          disabled={loading}
        >
          <option value="">Select experience level</option>
          {experiences.map((exp) => (
            <option key={exp} value={exp}>
              {exp}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="error-message">{error}</div>}

      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? 'Generating...' : 'Generate Interview Questions'}
      </button>
    </form>
  );
};

export default InterviewForm;
