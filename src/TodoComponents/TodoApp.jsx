import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Paper, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
function TodoApp() {
  const [Mytodolist, setMytodolist] = useState([]);

  //  ** This is how we can add new tasks into our to do list. 1. check to make sure value isnt an empty string because i donnt want to add a new item unless there is someting actually in it.
  const addNewTodo = (value) => {
    if (value !== '') {
      const newItems = [
        ...Mytodolist,
        { task: value, id: uuidv4(), compeleted: false },
      ];
      setMytodolist(newItems);
    }
  };
  // ** This methode will allow us to filter out an item based on its unique id and bring back a new list with the items that are not the id we chose.
  const DeleteTodo = (id) => {
    const newlist = Mytodolist.filter((item) => item.id !== id);
    setMytodolist(newlist);
  };
  //   ** Delete all the items in the list
  const DeleteAll = () => {
    setMytodolist([]);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa',
      }}
      elevation={0}
    >
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addNewTodo={addNewTodo} DeleteAll={DeleteAll} />

          <TodoList Mytodolist={Mytodolist} DeleteTodo={DeleteTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
