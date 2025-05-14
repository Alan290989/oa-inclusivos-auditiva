// src/components/NavBar.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
  IconButton,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import ClassIcon from '@mui/icons-material/Class';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export default function NavBar({ activeTab, onTabChange }) {
  const menuItems = [
    { label: 'Principal', icon: <HomeIcon /> },
    { label: 'Actividad', icon: <HistoryIcon /> },
    { label: 'Clases', icon: <ClassIcon /> },
    { label: 'Fichas de estudio', icon: <LibraryBooksIcon /> },
  ];

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo + buscador */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            My OVA
          </Typography>
          <Paper
            component="form"
            sx={{
              p: '2px 8px',
              display: 'flex',
              alignItems: 'center',
              width: 300,
              borderRadius: 4,
              border: '1px solid #ccc',
            }}
          >
            <SearchIcon color="action" />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Encuentra clases, actividades..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Paper>
        </Box>

        {/* Menú horizontal ocupando todo el ancho */}
        <Box
          sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            ml: 4,
          }}
        >
          {menuItems.map(({ label, icon }) => (
            <Button
              key={label}
              startIcon={icon}
              onClick={() => onTabChange(label)}
              sx={{
                flex: 1,
                textTransform: 'none',
                fontSize: '1.25rem',
                justifyContent: 'center',
                color:
                  activeTab === label ? 'primary.main' : 'text.secondary',
                fontWeight: activeTab === label ? 'bold' : 'normal',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.dark',
                },
              }}
            >
              {label}
            </Button>
          ))}

          {/* Ícono para menú responsive */}
          <IconButton sx={{ ml: 2 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
