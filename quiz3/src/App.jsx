import { Component } from "react";
import {Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/Home"
import QuizComponent from "./Components/Quiz"
import ResultComponent from "./Components/Result";


export default class App extends Component{
  render(){
    return(
      <Routes>
        <Route path="/" element={<HomeComponent/>}></Route>
        <Route path="/play-quiz" element={<QuizComponent/>}></Route>
        <Route path="/finish-quiz" element={<ResultComponent/>}></Route>
      </Routes>
    );
  };
}