import React from 'react';
import {Provider} from "react-redux";
import {store} from "./Stores/store";
import Home from "./Pages/Home/Home.";

function App() {
  return (
<Provider store={store}>
 <Home/>
</Provider>
  );
}

export default App;
