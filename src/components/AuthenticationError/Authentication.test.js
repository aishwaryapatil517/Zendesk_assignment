import React from "react";
import { render, screen } from "@testing-library/react";
import AuthenticationError from "./AuthenticationError";

describe("AuthenticationError", () => {
  it("renders error message correctly", () => {
    render(<AuthenticationError />);
    const errorMessage = screen.getByText("Opps!!! Something Went Wrong");
    expect(errorMessage).toBeInTheDocument();
  });
});
