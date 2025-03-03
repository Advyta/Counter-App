import CounterButton from "./components/CounterButton";

// Project:     Reactjs Counter App
// Module:      Main Module
// Component:   Counter Component
// Author:      Advyta
// Date:        03 Mar 2025
// Logic:
//   1. Component Structure:
//      - Serves as the root component of the application
//      - Imports and renders the CounterButton component
//
//   2. Styling:
//      - Inline styles for layout control
//      - Ensures consistent centered positioning

function App() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CounterButton />
    </main>
  );
}

export default App;
