import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Dashboard from "./components/Dashboard";
import UserList from "./components/UserList";
import GoalDetails from "./components/GoalDetails";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/goals/:userId" element={<GoalDetails />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;