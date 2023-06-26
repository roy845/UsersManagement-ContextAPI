import React, { useContext, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button, TextField } from "@mui/material";
import { DataContext } from "../context/DataContext";
import { toast } from "react-hot-toast";

const useStyles = makeStyles(() => ({
  todoContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },

  todoTitle: {
    marginRight: "8px",
  },
  topContainer: {
    border: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    borderRadius: "10px",
    padding: "16px",
    width: "40rem",
    marginLeft: "3rem",
    marginTop: "1rem",
  },
  container: {
    border: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    padding: "16px",
    width: "30rem",
    marginLeft: "3rem",
    marginTop: "1rem",
  },

  additionalInfoContainer: {
    border: "1px solid #000",
    borderBottom: "1px solid #000",
    padding: "16px",

    marginTop: "1rem",
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "3rem",
    marginBottom: "1rem",
  },
  searchInput: {
    marginRight: "8px",
    width: "32rem",
  },
  scrollableContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "8px",
  },
}));

const AddTodo = () => {
  const classes = useStyles();

  const scrollableContainerRef = useRef(null);

  const { selectedUserId, addNewTodo, setShowAddTodo } =
    useContext(DataContext);
  const [newTodo, setNewTodo] = useState({
    id: new Date().toTimeString(),
    title: "",
    completed: false,
    userId: selectedUserId,
  });

  const addTodo = () => {
    addNewTodo(selectedUserId, newTodo);
    setShowAddTodo(false);
    toast.success(`New todo to user ${selectedUserId} is added`);
  };

  return (
    <div className={classes.topContainer}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginLeft: "45px" }}>
          New Todo - User {selectedUserId}{" "}
        </h2>
      </div>
      <div className={classes.scrollableContainer} ref={scrollableContainerRef}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          autoFocus
          value={newTodo.title}
          onChange={(e) =>
            setNewTodo((prevNewTodo) => ({
              ...prevNewTodo,
              title: e.target.value,
            }))
          }
        />

        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "green" }}
            onClick={addTodo}
            disabled={!newTodo.title}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ backgroundColor: "red" }}
            onClick={() => setShowAddTodo(false)}
          >
            CANCEL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
