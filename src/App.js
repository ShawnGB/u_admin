import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Workshops from "./Pages/Workshops";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Dashboard} />
      <Route path="/users" component={Users} />
      <Route path="/workshops" component={Workshops} />
    </Router>
  );
}

export default App;
