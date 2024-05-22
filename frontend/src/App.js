import { Context } from "./Pages/store/context";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Pages/Homepage/homepage";
import Login from "./Pages/Login/login";
import UserProfile from "./Pages/Profile/profile";
import Signup from "./Pages/SignUp/signup";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Context.Provider value={[currentUser, setCurrentUser]}>
      <Router>
        <Routes>
          <Route path ="/Login" element = {<Login/>}/>
          <Route path ="/Homepage" element = {<Homepage/>}/>
          <Route path ="/UserProfile" element = {<UserProfile/>}/>
          <Route path ="/Signup" element = {<Signup/>}/>
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
