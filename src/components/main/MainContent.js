import React, { useState } from "react";
import { FormSubmitted } from "./components/FormSubmitted";

import "./MainContent.css";

const MainContent = ({ handleSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit({ firstName, lastName, email, guests, date, time });
    setFirstName("");
    setLastName("");
    setEmail("");
    setGuests("");
    setDate("");
    setTime("");
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setGuests("");
    setDate("");
    setTime("");
  };

  return (
    <>
      {!formSubmitted ? (
        <div className="reservation-form-wrapper">
          <h2 id="body">Book a table</h2>
          <form onSubmit={submitForm} className="reservation-form">
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
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                required
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                value={time}
                onChange={handleTimeChange}
                required
              />
            </label>
            <div className="button-group">
              <button
                type="button"
                className="delete-button"
                onClick={resetForm}
              >
                Delete
              </button>
              <button
                type="submit"
                className="submit-button"
                onClick={() => setFormSubmitted(true)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <FormSubmitted />
      )}
    </>
  );
};

export default MainContent;
