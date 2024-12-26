import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./component/sidebar/Siddebar"; 
import Repository from "./component/Home/Home"; 
import SignInPage from "./component/Login"; 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        {isLoggedIn && <Sidebar setIsLoggedIn={setIsLoggedIn} />}

        {/* Main Content */}
        <div
          className={`${
            isLoggedIn ? "md:ml-64" : "ml-0"
          } mt-16 md:mt-0 flex-1 bg-gray-100`} // Conditionally apply margin-left
        >
          <Routes>
            {/* Login Route */}
            <Route
              path="/login"
              element={<SignInPage setIsLoggedIn={setIsLoggedIn} />}
            />

            {/* Protected Route: Repositories */}
            <Route
              path="/repositories"
              element={isLoggedIn ? <Repository /> : <Navigate to="/login" />}
            />

            {/* Redirect to login if no route matches */}
            <Route
              path="*"
              element={<Navigate to={isLoggedIn ? "/repositories" : "/login"} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
