import React from 'react';
import {Provider} from "react-redux";
import {store} from "./Stores/store";
import {Container} from "react-bootstrap";
import PackageGroup from "./Components/PackageGroup";

function App() {
  return (
<Provider store={store}>
    <div dir="rtl" className="p-3 rtl mx-auto my-4">
<PackageGroup/>
    </div>
</Provider>
  );
}

export default App;
