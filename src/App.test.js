import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders without errors", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByTestId("app-component")).toBeInTheDocument();
  });

  it("navigates to '/error' if access token is not present and no hash param is provided", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByTestId("app-component")).toBeInTheDocument();
    expect(window.location.pathname).toEqual("/error");
  });
});
