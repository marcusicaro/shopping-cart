import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";

const cart = [
  { name: "first", quantity: 2 },
  { name: "second", quantity: 1 },
];

describe("Shop cart tests", () => {
  test("shop cart renders", () => {
    const removeItemFromCart = jest.fn();
    const addItemToCart = jest.fn();

    render(
      <Cart
        cart={cart}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
      />
    );

    expect(screen.getByText("first")).toBeInTheDocument();

    expect(screen.getByTestId("first")).toBeInTheDocument();

    const first = screen.getAllByTestId(/first/i);

    const firstHeader = within(first).getByRole("heading", { name: "first" });

    // testando com getAllBy usa-se array
    // expect(screen.getAllByTestId("foo")[1]).toBeInTheDocument();

    // const getItemName = jest.fn().mockReturnValue(cart[0].name);
    // const result = getItemName();
  });
});
