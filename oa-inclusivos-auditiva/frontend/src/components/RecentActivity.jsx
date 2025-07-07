import React from 'react';
import { Box, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';

export default function RecentActivity() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Actividad reciente
      </Typography>
      <Card style={{ width: 250 }}>
        <Card.Body>
          <Typography variant="caption">10 Qs</Typography>
          <Card.Title>INVERTEBRADOS</Card.Title>
          <Typography variant="body2" gutterBottom>
            100% de precisión
          </Typography>
        </Card.Body>
      </Card>
    </Box>
  );
}