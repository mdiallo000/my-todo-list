import { Divider, Paper, List } from '@mui/material';
import React from 'react';
import Todo from './Todo';
function TodoList({ Mytodolist, DeleteTodo }) {
  return (
    <Paper>
      <List>
        {Mytodolist.map((item) => {
          return (
            <>
              <Todo data={item} DeleteTodo={DeleteTodo} />
              <Divider />
            </>
          );
        })}
      </List>
    </Paper>
  );
}

export default TodoList;
