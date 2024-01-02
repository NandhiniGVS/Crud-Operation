import React from "react";
import Navbar from "./common/components/layout/Navbar";
import Home from "./common/components/pages/Home";
import AddUser from "./common/components/users/AddUser";
import EditUser from "./common/components/users/EditUser";
import ViewUser from "./common/components/users/ViewUser";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{ BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          </Routes>
        </Router>  
    </div>
  );
}

export default App;
