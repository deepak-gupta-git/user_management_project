import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { state } = useContext(AppContext);
  const totalGoals = state.goals.length;
  const completedGoals = state.goals.filter(goal => goal.status === "Completed").length;

  return (
    <div className="text-center mt-[3rem]">
      <h1 className="text-5xl text-red-500">Dashboard</h1>
     <div className="mt-4">
     <p>Total Users: {state.users.length}</p>
      <p>Total Goals: {totalGoals}</p>
      <p>Completed Goals: {completedGoals}</p>
     </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to="/users">View Users</Link></button>
    </div>
  );
};

export default Dashboard;