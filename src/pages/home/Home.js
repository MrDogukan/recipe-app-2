import React, { useState } from "react";
import Header from "../../components/header/Header";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [recipe, setRecipe] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const APP_ID = "b432b251";
  const APP_KEY = "1626399cfff4687ebebbb0379a4f9ef8";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    if (query !== "") {
      const response = await axios.get(url);
    }
  };

  return (
    <div>
      <Header
        setQuery={setQuery}
        query={query}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
      />
    </div>
  );
};

export default Home;
