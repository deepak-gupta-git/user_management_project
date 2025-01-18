import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const UserList = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="text-center mt-[3rem]">
      <h1 className="text-5xl text-red-500">User List</h1>
      {state.users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {state.users.map((user) => (
            <li key={user.id}>
             <div className="mt-4">
             <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <button className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <Link  to={`/goals/${user.id}`}>View Goals</Link>
              </button>
             
             </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;