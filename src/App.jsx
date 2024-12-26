import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./component/sidebar/Siddebar"; // Adjust the import path as needed
import Repository from "./component/Home/Home"; // Adjust the import path as needed
import SignInPage from "./component/Login"; // Import the Login component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

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

            {/* Redirect any other route to repositories or login */}
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
