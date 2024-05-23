import React, { useState } from "react";

const MainContent = ({ handleSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({ firstName, lastName, email, guests });
    setFirstName("");
    setLastName("");
    setEmail("");
    setGuests("");
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </label>
      <label>
        Guests:
        <input
          type="text"
          value={guests}
          onChange={handleGuestsChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MainContent;
