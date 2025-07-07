import React from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  useTheme, 
  useMediaQuery,
  Paper
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import StarIcon from '@mui/icons-material/Star';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const CategoryTabs = ({ selectedCategory, setSelectedCategory }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  // Estilo personalizado para las pestañas
  const tabStyle = {
    minHeight: 60,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    minWidth: isMobile ? 'auto' : 100,
    '&.Mui-selected': {
      color: theme.palette.warning.dark,
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 4,
        mb: 4,
        overflow: 'hidden',
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        variant={isMobile ? "scrollable" : "fullWidth"}
        scrollButtons={isMobile ? "auto" : false}
        textColor="inherit"
        indicatorColor="warning"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.warning.main,
            height: 3
          }
        }}
      >
        <Tab 
          icon={<AllInclusiveIcon />} 
          iconPosition="start"
          label="Todos" 
          value="todos" 
          sx={tabStyle}
        />
        <Tab 
          icon={<SchoolIcon />} 
          iconPosition="start"
          label="Módulos" 
          value="modulos" 
          sx={tabStyle}
        />
        <Tab 
          icon={<DirectionsRunIcon />} 
          iconPosition="start"
          label="Precisión" 
          value="precisión" 
          sx={tabStyle}
        />
        <Tab 
          icon={<EmojiEventsIcon />} 
          iconPosition="start"
          label="Constancia" 
          value="constancia" 
          sx={tabStyle}
        />
        <Tab 
          icon={<StarIcon />} 
          iconPosition="start"
          label="Especiales" 
          value="especiales" 
          sx={tabStyle}
        />
      </Tabs>
    </Paper>
  );
};

export default CategoryTabs;