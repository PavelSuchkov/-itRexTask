import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from "./components/Table";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

export default App;
