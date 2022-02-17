import React from 'react';
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

function Todo({ data }) {
  return (
    <div>
      <ListItem>
        <>
          <Checkbox tabIndex={-1} />
          <ListItemText>{data.task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <Delete />
            </IconButton>
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
