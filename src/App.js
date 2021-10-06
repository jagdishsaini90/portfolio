import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/projects" component={() => <Projects />} />
        <Route path="/blogs" component={() => <Blogs />} />
        <Route path="/" component={() => <Home />} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
