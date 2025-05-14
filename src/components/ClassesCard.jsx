import React from 'react';
import { Card, CardContent, Box, Typography, LinearProgress } from '@mui/material';

export default function ClassesCard() {
  return (
    <Card sx={{ width: 250 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Clases
        </Typography>
        <Typography variant="subtitle2">Reino Animal</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Box sx={{ flexGrow: 1 }}>
            <LinearProgress variant="determinate" value={10} />
          </Box>
          <Typography variant="caption">10%</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}