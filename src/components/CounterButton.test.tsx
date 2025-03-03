import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { CounterProvider } from "../context/CounterContext";
import CounterButton from "./CounterButton";
import "@testing-library/jest-dom";

// Helper function to render component with required providers
const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ChakraProvider>
      <CounterProvider>{component}</CounterProvider>
    </ChakraProvider>
  );
};

describe("CounterButton", () => {
  // Test initial render
  it("should display initial count of 0", () => {
    renderWithProviders(<CounterButton />);
    expect(screen.getByText("Current count 0")).toBeInTheDocument();
  });

  // Test increment functionality
  it("should increment count when button is clicked", () => {
    renderWithProviders(<CounterButton />);

    const button = screen.getByText("+1");
    fireEvent.click(button);

    expect(screen.getByText("Current count 1")).toBeInTheDocument();
  });

  // Test toast notification
  it("should show toast when button is clicked", () => {
    renderWithProviders(<CounterButton />);

    const button = screen.getByText("+1");
    fireEvent.click(button);

    expect(screen.getByText("Incremented")).toBeInTheDocument();
    expect(screen.getByText("Counter is now 1")).toBeInTheDocument();
  });
});
