import React from "react";
import { HashRouter } from "react-router-dom";

import List from "./List";
import Input from "./Input";

function Exercises() {
  return (
    <div>
      <HashRouter>
        <Input />
        <List />
      </HashRouter>
    </div>
  );
}

export default Exercises;
