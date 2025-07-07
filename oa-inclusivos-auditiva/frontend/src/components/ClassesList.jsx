// src/components/ClassesList.jsx
import React from 'react';
import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';

const classesData = [
  { title: '🦁 Reino Animal', description: 'Explora los animales y sus hábitats' },
  { title: '🦋 Ciclo de Vida', description: 'De oruga a mariposa y más' },
  { title: '🌱 Plantas', description: 'Cómo crecen las plantas' },
  { title: '🌍 Sistema Solar', description: 'Nuestros planetas y el espacio' },
];

export default function ClassesList() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 2,
        mt: 2,
      }}
    >
      {classesData.map(({ title, description }) => (
        <Card key={title} sx={{ bgcolor: 'primary.light' }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
