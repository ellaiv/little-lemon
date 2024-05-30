import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders Header, Nav, Home, and Footer components", () => {
  render(<App />);

  expect(screen.getByAltText("Little Lemon Logo")).toBeInTheDocument();

  expect(screen.getByRole("navigation")).toBeInTheDocument();

  expect(screen.getByRole("main")).toBeInTheDocument();

  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});

test("does not render MainContent initially", () => {
  render(<App />);
  expect(screen.queryByText(/main content/i)).not.toBeInTheDocument();
});

test("opens menu when menu button is clicked", () => {
  render(<App />);

  const menuButton = screen.getByLabelText("menu");
  fireEvent.click(menuButton);
  expect(screen.getByText(/drinks/i)).toBeInTheDocument();
  expect(screen.getByText(/beverages/i)).toBeInTheDocument();
  expect(screen.getByText(/salads/i)).toBeInTheDocument();
});

test("adds item to cart and updates badge count", () => {
  render(<App />);

  const cartButton = screen.getByLabelText("shopping cart");
  fireEvent.click(cartButton);
  expect(screen.getByText("1")).toBeInTheDocument();
});
