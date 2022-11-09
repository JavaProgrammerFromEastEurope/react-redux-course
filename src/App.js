import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

const App = () => {
  return (
    <BrowserRouter>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/todos">Todos</NavLink>
      <Routes>
        <Route path={"/users"} element=<UserList /> />
        <Route path={"/todos"} element=<TodoList /> />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
