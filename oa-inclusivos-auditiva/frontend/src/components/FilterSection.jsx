// src/components/FilterSection.jsx
import React, { useState } from 'react';
import {
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';

export default function FilterSection({ onFilter }) {
  const [query, setQuery] = useState('');
  const [moduleFilter, setModuleFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  // Lista de ejemplo; tú la puedes cargar dinámicamente
  const modules = ['Módulo 1', 'Módulo 2', 'Módulo 3'];
  const types = ['Video', 'PDF', 'Animación'];

  const handleFilter = () => {
    onFilter({ query, module: moduleFilter, type: typeFilter });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        alignItems: 'center'
      }}
    >
      <TextField
        label="Buscar objetos"
        placeholder="Palabra clave"
        value={query}
        onChange={e => setQuery(e.target.value)}
        sx={{ minWidth: 200 }}
      />

      <FormControl sx={{ minWidth: 160 }}>
        <InputLabel>Módulo</InputLabel>
        <Select
          value={moduleFilter}
          label="Módulo"
          onChange={e => setModuleFilter(e.target.value)}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {modules.map(m => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 160 }}>
        <InputLabel>Tipo de recurso</InputLabel>
        <Select
          value={typeFilter}
          label="Tipo de recurso"
          onChange={e => setTypeFilter(e.target.value)}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          {types.map(t => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ flexGrow: 1 }} />

      <Button variant="contained" onClick={handleFilter}>
        Filtrar
      </Button>
    </Paper>
  );
}
