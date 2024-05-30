import React, { useState } from "react";
import { FormSubmitted } from "./components/FormSubmitted";

import "./MainContent.css";

const MainContent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!guests) {
      newErrors.guests = "Number of guests is required.";
    } else if (isNaN(guests) || guests <= 0) {
      newErrors.guests = "Guests should be a positive number.";
    }
    if (!date) newErrors.date = "Date is required.";
    if (!time) newErrors.time = "Time is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    if (validateForm()) {
      resetForm();
      setFormSubmitted(true);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setGuests("");
    setDate("");
    setTime("");
    setErrors({});
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
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </label>
            <label>
              Email:
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label>
              Guests:
              <input
                type="number"
                value={guests}
                onChange={handleGuestsChange}
                required
              />
              {errors.guests && <span className="error">{errors.guests}</span>}
            </label>
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                required
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </label>
            <label>
              Time:
              <input
                type="time"
                value={time}
                onChange={handleTimeChange}
                required
              />
              {errors.time && <span className="error">{errors.time}</span>}
            </label>
            <div className="button-group">
              <button
                type="button"
                className="delete-button"
                onClick={resetForm}
              >
                Delete
              </button>
              <button type="submit" className="submit-button">
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
