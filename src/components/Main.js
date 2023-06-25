import { useContext } from "react";
import "../App.css";
import ButtonAppBar from "../components/ButtonAppBar";
import Users from "../components/Users";
import Todos from "../components/Todos";
import Posts from "../components/Posts";
import AddTodo from "../components/AddTodo";
import AddPost from "../components/AddPost";
import NewUser from "../components/NewUser";
import { DataContext } from "../context/DataContext";

const Main = () => {
  const { showAddUser, selectedUserId, showAddTodo, showAddPost } =
    useContext(DataContext);

  return (
    <div className="App">
      <ButtonAppBar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "0 0 auto" }}>
          <Users />
        </div>
        {showAddUser && <NewUser />}
        {selectedUserId && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            }}
          >
            {!showAddTodo ? <Todos /> : <AddTodo />}
            {!showAddPost ? <Posts /> : <AddPost />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
