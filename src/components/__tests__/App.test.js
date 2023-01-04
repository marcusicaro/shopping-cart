import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const user = userEvent.setup();

describe("App component", () => {
  describe("Homepage", () => {
    test("renders homepage", () => {
      render(<App />, { wrapper: BrowserRouter });

      expect(screen.getByText(/shop/i)).toBeInTheDocument();
    });

    test("redirects from homepage to shop page", async () => {
      render(<App />, { wrapper: BrowserRouter });

      // tests if redirects to shop page
      await user.click(screen.getByText(/shop/i));
      expect(screen.getByText(/Shop Page/i)).toBeInTheDocument();
    });
  });

  describe("shop page", () => {
    function loadPage() {
      const shopRoute = "/shop/";
      render(
        <MemoryRouter initialEntries={[shopRoute]}>
          <App />
        </MemoryRouter>
      );
    }
    test("render shop page", () => {
      loadPage();

      expect(screen.getByText(/green dragon/i)).toBeInTheDocument();
      expect(screen.getByText(/red dragon/i)).toBeInTheDocument();
    });
    test("render items prices", () => {
      loadPage();

      expect(screen.getByText("50")).toBeInTheDocument();
    });

    test("goes to item page", async () => {
      loadPage();

      await user.click(screen.getByText(/red dragon/i));
      expect(screen.getByRole("heading").textContent).toMatch(/red dragon/i);
    });

    test("renders cart", async () => {
      loadPage();

      expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();

      // tests cart variation
      await user.click(screen.getByRole("button", { name: "+" }));
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  describe("item page", () => {
    test("landing on a item page", () => {
      const itemRoute = "/shop/someItem";
      render(
        <MemoryRouter initialEntries={[itemRoute]}>
          <App />
        </MemoryRouter>
      );

      expect(screen.getByText(/someItem/i)).toBeInTheDocument();
    });
    test("landing on an existing item page", () => {});
    const redDragon = "/shop/redDragon";
    render(
      <MemoryRouter initialEntries={[redDragon]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Red Dragon/i)).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
  });

  describe("bad page", () => {
    test("renders 404 page", () => {
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
  });
});
