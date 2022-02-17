import React, { useState } from 'react';
import { Typography, Paper, Button, TextField } from '@mui/material';
function TodoForm({ addNewTodo, DeleteAll }) {
  const [Inputs, getInputs] = useState('');

  const Inputvalue = (event) => {
    getInputs(event.target.value);
    console.log(Inputs);
  };

  return (
    <div>
      <Paper>
        <Typography variant="h1">Add a Todo</Typography>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addNewTodo(Inputs);
            getInputs('');
          }}
        >
          {/* <input type="text" value={Inputs} onChange={Inputvalue} /> */}
          <TextField
            value={Inputs}
            onChange={Inputvalue}
            label="Add A New Task 😊"
            margin="normal"
            fullWidth
          />
          <button>Add A Todo </button>
          <Button variant="contained" onClick={() => DeleteAll()}>
            Clear All
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default TodoForm;
