import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

function Todo({ data, DeleteTodo, DeleteAll }) {
  return (
    <div>
      <ListItem>
        <>
          <Checkbox
            tabIndex={-1}
            onClick={() => {
              data.completed = true;
            }}
          />
          <ListItemText>{data.task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                DeleteTodo(data.id);
              }}
            >
              <Delete />
            </IconButton>
            {/* sfdsdsssssssssss */}

            <IconButton aria-label="Edit">
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      </ListItem>
    </div>
  );
}

export default Todo;
