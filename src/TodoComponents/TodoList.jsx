import { Divider, Paper, List } from '@mui/material';
import React from 'react';
import Todo from './Todo';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Delete, ClearAllIcon } from '@mui/icons-material';
function TodoList({ Mytodolist, DeleteTodo, DeleteAll }) {
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
