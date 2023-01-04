import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

describe("App component", () => {
  test("landing on the home page", async () => {
    render(<App />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    expect(screen.getByText(/shop/i)).toBeInTheDocument();

    // tests if redirects to shop page
    await user.click(screen.getByText(/shop/i));
    expect(screen.getByText(/Items Page/i)).toBeInTheDocument();
  });

  test("landing on a bad page", () => {
    const badRoute = "/asdas/bad/route";
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 Dragon Not Found/i)).toBeInTheDocument();
    expect(screen.getByRole("heading").textContent).toMatch(
      /404 Dragon Not Found/i
    );
  });

  test("landing on a item page", () => {
    const itemRoute = "/shop/someItem";
    render(
      <MemoryRouter initialEntries={[itemRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/someItem/i)).toBeInTheDocument();
    expect(screen.getByText(/red dragon/i)).toBeInTheDocument();
  });
});
