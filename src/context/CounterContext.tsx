import React, { createContext, useContext, useState } from "react";

// Project:     Reactjs Counter App
// Module:      Context Module
// Component:   Counter Context Component
// Author:      Advyta
// Date:        03 Mar 2025
// Logic:
//   1. Context Definition:
//      - Creates a typed React Context for counter operations
//      - Interface CounterContextType defines the shape:
//        * count: number - stores current counter value
//        * increment: () => void - function to increase counter
//      - Initial context value is undefined
//
//   2. Custom Hook (useCounter):
//      - Provides type-safe access to counter context
//      - Implements error boundary if used outside provider
//      - Returns { count, increment } for component consumption
//
//   3. Provider Component:
//      - Manages global counter state using useState
//      - Initial counter value set to 0
//      - Provides increment function to modify state
//      - Wraps children with context provider
//
//   4. State Management:
//      - Uses React's useState for maintaining counter value
//      - Increment function ensures atomic updates
//      - State is shared across all consuming components
//
//   5. Type Safety:
//      - Implements TypeScript interfaces for props and context
//      - Ensures type checking for context consumers
//      - Provides type definitions for children prop
//
//   6. Error Handling:
//      - Throws an error if context is accessed outside provider
//      - Ensures proper component tree structure
//      - Helps developers identify context-related issues

interface CounterContextType {
  count: number;
  increment: () => void;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

// Custom Counter Hook
export const useCounter = () => {
  const countContext = useContext(CounterContext);
  if (!countContext) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return countContext;
};

interface CounterProviderProps {
  children: React.ReactNode;
}

// Counter Provider
export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => setCount(count + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
