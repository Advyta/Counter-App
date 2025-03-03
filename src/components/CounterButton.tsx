// @ts-expect-error React is needed for JSX transformation
import React from "react";
import { useCounter } from "../context/CounterContext";
import { useToast, Box, Button, Flex, Text } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";

// Project:     Reactjs Counter App
// Module:      Counter Module
// Component:   Counter Button Component
// Author:      Advyta
// Date:        03 Mar 2025
// Logic:
//   1. Component State & Context:
//      - Uses the useCounter hook to access global counter state and increment function
//      - Uses Chakra UI's useToast hook for displaying notifications
//
//   2. User Interaction:
//      - Displays current count from global state
//      - Provides a "+1" button that triggers increment on click
//
//   3. Counter Logic:
//      - When "+1" button is clicked:
//        a. Calls the increment function from context to update global count
//        b. Shows a toast notification with the new count value
//
//   4. Toast Notification:
//      - Appears at the top of the screen
//      - Shows for 3 seconds (3000ms)
//      - Is closeable by user
//      - Displays:
//        * Success icon (LuCircleCheck)
//        * "Incremented" title
//        * Updated counter value
//      - Styled with:
//        * Gradient background
//        * Custom border with gradient
//        * Specific typography (Inter font)
//        * Flex layout for icon and text
//
//   5. Styling:
//      - Counter display uses Inter font, size 16px
//      - Button has hover state with darker background
//      - Uses Chakra UI's Box component for layout

const toastStyles = {
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  p: "12px 20px 12px 16px",
  gap: "8px",
  bg: "radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.3) 0%, rgba(116, 200, 152, 0.14) 100%), #46474F",
  boxShadow:
    "0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)",
  borderRadius: "8px",
  position: "relative" as const,
  _before: {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "8px",
    p: "1px",
    background:
      "radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(102, 193, 147, 0.65) 0%, rgba(56, 63, 66, 0.7) 100%), linear-gradient(0deg, #6F7076, #6F7076)",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
    WebkitMaskComposite: "destination-out",
    pointerEvents: "none",
  },
};

const buttonStyles = {
  bg: "#E5E7EB",
  px: "12px",
  py: "4px",
  borderRadius: "8px",
  fontSize: "14px",
  fontFamily: "Inter",
  color: "#46474F",
  _hover: { bg: "#D1D5DB" },
  transition: "background 0.2s",
};

const CounterButton = () => {
  const { count, increment } = useCounter();
  const toast = useToast();
  const handleIncrement = () => {
    increment();
    toast({
      title: "Incremented",
      description: `Counter is now ${count + 1}`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
      render: ({ onClose }) => (
        <Box {...toastStyles} onClick={onClose}>
          <LuCircleCheck size={24} color="#74C898" />
          <Box>
            <Text
              color="white"
              fontFamily="Inter"
              fontWeight="500"
              fontSize="14px"
            >
              Incremented
            </Text>
            <Text
              color="white"
              fontFamily="Inter"
              fontWeight="500"
              fontSize="14px"
            >
              Counter is now {count + 1}
            </Text>
          </Box>
        </Box>
      ),
    });
  };
  return (
    <Flex align="center" gap="12px">
      <Text color="#46474F" fontFamily="Inter" fontSize="16px" fontWeight="500">
        Current count {count}
      </Text>
      <Button {...buttonStyles} onClick={handleIncrement}>
        +1
      </Button>
    </Flex>
  );
};

export default CounterButton;
