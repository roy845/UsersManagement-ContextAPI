import { useState, useEffect } from "react";
import { getAllPosts, getAllTodos, getAllUsers } from "../ServerAPI";

const useFetchData = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const { data } = await getAllUsers();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    const fetchAllTodos = async () => {
      try {
        const { data } = await getAllTodos();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllTodos();
  }, []);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPosts();
  }, []);

  return [todos, posts, users, setTodos, setPosts, setUsers];
};

export default useFetchData;
