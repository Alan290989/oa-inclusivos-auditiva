import React from 'react';
import { Paper, TextField, Button } from '@mui/material';

export default function JoinSection() {
  return (
    <Paper
      elevation={3}
      sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}
    >
      <TextField
        variant="outlined"
        placeholder="Introducir un código de participación"
        sx={{ width: 400 }}
      />
      <Button variant="contained" size="large">
        Unir
      </Button>
    </Paper>
  );
}