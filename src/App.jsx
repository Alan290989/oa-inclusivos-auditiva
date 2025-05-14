// src/App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import FilterSection from './components/FilterSection';
import RecentActivity from './components/RecentActivity';
import ClassesList from './components/ClassesList';  // Asegúrate de tener este componente
import { Container, Box, Typography, Card, CardActionArea, CardContent } from '@mui/material';

function App() {
  const [activeTab, setActiveTab] = useState('Principal');

  // Datos de la clase más reciente
  const latestClass = {
    title: '🦁 Reino Animal',
    description: 'Explora los animales y sus hábitats',
  };

  return (
    <Box>
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />

      <Container sx={{ mt: 4 }}>
        

        {activeTab === 'Principal' && (
          <>
          <FilterSection onFilter={filters => console.log(filters)} />
            <RecentActivity />

            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Clase más reciente
              </Typography>
              <Card sx={{ maxWidth: 300, bgcolor: 'primary.light' }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {latestClass.title}
                    </Typography>
                    <Typography variant="body2">
                      {latestClass.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </>
        )}

        {activeTab === 'Actividad' && <RecentActivity />}

        {activeTab === 'Clases' && (
          <>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Todas las clases
            </Typography>
            <ClassesList />
          </>
        )}

        {activeTab === 'Fichas de estudio' && (
          <Typography variant="h5" sx={{ mt: 4 }}>
            Tus fichas de estudio van aquí
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default App;
