import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import userEvent from "@testing-library/user-event";

const cart = [
  { name: "first", quantity: 2 },
  { name: "second", quantity: 1 },
];

const user = userEvent.setup();

describe("Shop cart tests", () => {
  test("shop cart renders", async () => {
    const removeItemFromCart = jest.fn(() => 1);
    const addItemToCart = jest.fn(() => 3);

    const { getByText } = render(
      <Cart
        cart={cart}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
      />
    );

    expect(screen.getByText("first")).toBeInTheDocument();

    expect(screen.getByTestId("first")).toBeInTheDocument();

    const first = screen.getByTestId(/first/i);

    const increaseButton = within(first).getByRole("button", {
      name: "+",
    });

    await user.click(increaseButton);
    expect(addItemToCart.mock.calls.length).toEqual(1);
    expect(addItemToCart()).toBe(3);
    // expect(addItemToCart.mock.calls.result.value).toEqual(3);

    const decreaseButton = within(first).getByRole("button", {
      name: "-",
    });

    expect(decreaseButton).toBeInTheDocument();
    await user.click(decreaseButton);
    expect(removeItemFromCart.mock.calls.length).toEqual(1);
  });
});
