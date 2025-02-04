import Home from "./screens/Home";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
