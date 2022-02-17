import React, { useState } from 'react';
import { Typography, Paper } from '@mui/material';
function TodoForm({ addNewTodo }) {
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
          <input type="text" value={Inputs} onChange={Inputvalue} />
          <button>Make a new Todo </button>
        </form>
      </Paper>
    </div>
  );
}

export default TodoForm;
