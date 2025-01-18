import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const GoalDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  const user = state.users.find((user) => user.id === parseInt(userId));
  const userGoals = state.goals.filter((goal) => goal.userId === parseInt(userId));

  const handleAddGoal = () => {
    const newGoal = {
      id: state.goals.length + 1,
      userId: parseInt(userId),
      title: `New Goal ${state.goals.length + 1}`,
      status: "In Progress",
    };
    dispatch({ type: "ADD_GOAL", payload: newGoal });
  };

  const handleDeleteGoal = (goalId) => {
    dispatch({
      type: "DELETE_GOAL",
      payload: goalId,
    });
  };

  return (
    <div className="text-center mt-[3rem]">
      <h1 className="text-5xl text-red-500">{user?.name}'s Goals</h1>
      <div className="mt-4">
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => navigate(-1)}>Back</button> <br />
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleAddGoal}>Add Goal</button>
      </div>
      {userGoals.length === 0 ? (
        <p>No goals found</p>
      ) : (
        <ul>
          {userGoals.map((goal) => (
            <li key={goal.id}>
              <h3>{goal.title}</h3>
              <p>Status: {goal.status}</p>
              <button className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalDetails;
