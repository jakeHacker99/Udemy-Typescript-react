import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <h2>shu</h2>
      <h3>Search for a package</h3>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
