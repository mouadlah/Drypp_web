import React, { useState } from 'react';
import '../css_files/Bottle.css';

function Bottle() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage(''); // Reset success message
    setErrorMessage(''); // Reset error message

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzt2IkN-_3kQyoeVcGwIjx6Anopw2zMavhgC2JPb078sOamkqgx0PD1P04mvm7skIi_zg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email: email }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setSuccessMessage(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error submitting email:', error);
    }

    setEmail(''); // Reset email field
  };

  return (
    <div className="fancy-bottle-page">
      <div className="bottle-content">
        <h1>Join the <span>Drypp</span> Family</h1>
        <p>Be among the first to experience the future of hydration with our smart bottle. Join the waitlist for exclusive updates and pre-order opportunities!</p>

        {/* Display success message */}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {/* Display error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Waitlist form */}
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="submit-button">Join the Waitlist</button>
        </form>
      </div>
    </div>
  );
}

export default Bottle;
