import React, { createContext, useState } from "react";
import useFetchData from "../hooks/useFetchData";
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedTodos, setSelectedTodos] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);
  const [showAddPost, setShowAddPost] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [todos, posts, users, setTodos, setPosts, setUsers] = useFetchData();

  const updateTodo = (todoId, completed) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: completed } : todo
      )
    );
    setSelectedTodos((prevSelectedTodos) =>
      prevSelectedTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: completed } : todo
      )
    );
  };

  const addNewTodo = (userId, newTodo) => {
    setTodos((prevTodos) => {
      const updatedTodos = [
        ...prevTodos,
        {
          userId: userId,
          id: newTodo.id,
          title: newTodo.title,
          completed: newTodo.completed,
        },
      ];
      return updatedTodos;
    });
  };

  const addNewPost = (userId, newPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [
        ...prevPosts,
        {
          userId: userId,
          id: newPost.id,
          title: newPost.title,
          body: newPost.body,
        },
      ];
      return updatedPosts;
    });
  };

  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
  };

  const addNewUser = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [
        ...prevUsers,
        {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          address: {
            street: "",
            city: "",
            zipcode: "",
          },
        },
      ];
      return updatedUsers;
    });
  };

  return (
    <DataContext.Provider
      value={{
        selectedUserId,
        setSelectedUserId,
        todos,
        setTodos,
        users,
        setUsers,
        posts,
        setPosts,
        selectedTodos,
        setSelectedTodos,
        selectedPosts,
        setSelectedPosts,
        showAddTodo,
        setShowAddTodo,
        showAddPost,
        setShowAddPost,
        showAddUser,
        setShowAddUser,
        updateTodo,
        addNewTodo,
        addNewPost,
        handleUserSelect,
        addNewUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContextProvider };
