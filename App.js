import React from 'react';

function App() {
  return (
    <div>
      <h1>Feedback Form</h1>
      <form id="feedback-form" action="/api/feedback" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" required></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;

