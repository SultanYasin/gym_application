import React from "react";
import { HashRouter } from "react-router-dom";
import List from "./List";
import Input from "./Input";

function ExercisesList() {
  return (
    <div style={{maxWidth: '70%', margin:"auto"}}>
     
        <Input />
        <List />
     
    </div>
  );
}

export default ExercisesList;
