import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyles";

const Form = ({ query, setQuery, getData, mealTypes, setMeal, meal }) => {
  return (
    <FormContainer>
      <FoodInput value={query} />
      <Button>Search</Button>
      <Select></Select>
    </FormContainer>
  );
};

export default Form;
