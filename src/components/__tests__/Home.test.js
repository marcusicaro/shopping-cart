import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "../Home";

describe("Home component", () => {
  test("renders correct button", async () => {
    const user = userEvent.setup();
    render(<Home />, { wrapper: BrowserRouter });

    expect(screen.getByText(/shop/i)).toBeInTheDocument();
    await user.click(screen.getByText(/shop/i));
    // expect(screen.getByText(/Items Page/i)).toBeInTheDocument();
  });
});
