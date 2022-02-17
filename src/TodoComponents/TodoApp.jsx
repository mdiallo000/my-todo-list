import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { Paper } from '@mui/material';
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

  return (
    <div>
      <TodoForm addNewTodo={addNewTodo} />
      {Mytodolist.map((item) => {
        return (
          <Paper>
            <li>{item.task}</li>
          </Paper>
        );
      })}
      <TodoList />
    </div>
  );
}

export default TodoApp;
