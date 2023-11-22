import { Container, Stack } from "@mui/material";
import React from "react";

export default function ChosenDish() {
  const lebel = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="chosen_dish_page">
      <Container className="dish_container">
        <Stack className="chosen_dish_slider"></Stack>
        <Stack className="chosen_dish_slider"></Stack>
      </Container>
    </div>
  );
}
