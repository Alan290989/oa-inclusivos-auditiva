import React from 'react';
import { Box, Typography, Grid, useTheme, useMediaQuery, Container } from '@mui/material';
import TabsBar from '../components/TabsBar';
import ActivityCard from '../components/ActivityCard';

// Datos de actividades por módulo
const activityData = {
  // Módulo de Ciclo de Vida
  'ciclovida': [
    { 
      id: 1, 
      title: 'ETAPAS HUMANAS', 
      icon: '👶👦👨👴',
      iconType: 'emoji',
      questions: 5, 
      accuracy: 90, 
      completed: true, 
      duration: '5 minutos',
      color: '#FFCDD2' // Color rosado suave
    },
    { 
      id: 2, 
      title: 'BEBÉS A NIÑOS', 
      icon: '👶➡️👦',
      iconType: 'emoji',
      questions: 4, 
      accuracy: 100, 
      completed: true, 
      duration: '3 minutos',
      color: '#FFCDD2' // Color rosado suave
    },
  ],
  // Módulo de Animales
  'animales': [
    { 
      id: 3, 
      title: 'ANIMALES SALVAJES', 
      icon: '🦁',
      iconType: 'emoji',
      questions: 6, 
      accuracy: 80, 
      completed: true, 
      duration: '7 minutos',
      color: '#BBDEFB' // Color azul suave
    },
    { 
      id: 4, 
      title: 'ANIMALES DOMÉSTICOS', 
      icon: '🐶',
      iconType: 'emoji',
      questions: 5, 
      accuracy: 100, 
      completed: true, 
      duration: '4 minutos',
      color: '#BBDEFB' // Color azul suave
    },
  ],
  // Módulo de Plantas
  'plantas': [
    { 
      id: 5, 
      title: 'PARTES DE PLANTAS', 
      icon: '🌱',
      iconType: 'emoji',
      questions: 4, 
      accuracy: 75, 
      completed: true, 
      duration: '5 minutos',
      color: '#C8E6C9' // Color verde suave
    },
    { 
      id: 6, 
      title: 'CRECIMIENTO', 
      icon: '🌱➡️🌳',
      iconType: 'emoji',
      questions: 3, 
      accuracy: 67, 
      inProgress: true,
      color: '#C8E6C9' // Color verde suave
    },
  ],
  // Módulo de Ecosistema
  'ecosistema': [
    { 
      id: 7, 
      title: 'AGUA Y TIERRA', 
      icon: '🌊🏔️',
      iconType: 'emoji',
      questions: 5, 
      accuracy: 60, 
      inProgress: true,
      color: '#D1C4E9' // Color lila suave
    },
    { 
      id: 8, 
      title: 'ANIMALES Y PLANTAS', 
      icon: '🦁🌳',
      iconType: 'emoji',
      questions: 4, 
      notStarted: true,
      color: '#D1C4E9' // Color lila suave
    },
  ]
};

const ActivityView = () => {
  const [tabValue, setTabValue] = React.useState(0); // Inicialmente seleccionado "En curso"
  const [currentModule, setCurrentModule] = React.useState('animales'); // Módulo predeterminado
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Filtrar actividades según la pestaña seleccionada
  const filteredActivities = activityData[currentModule]?.filter(activity => {
    if (tabValue === 0) return activity.inProgress || activity.notStarted;
    if (tabValue === 1) return activity.completed;
    return true;
  }) || [];

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      {/* Encabezado con ícono de seña */}
      <Box 
        sx={{ 
          mb: 4, 
          display: 'flex', 
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          textAlign: isMobile ? 'center' : 'left'
        }}
      >
        <Box 
          sx={{ 
            backgroundColor: theme.palette.primary.main,
            borderRadius: '50%',
            width: 80,
            height: 80,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mr: isMobile ? 0 : 3,
            mb: isMobile ? 2 : 0
          }}
        >
          {/* Ícono según módulo actual */}
          <Typography variant="h2" sx={{ color: 'white' }}>
            {currentModule === 'ciclovida' ? '👶' : 
             currentModule === 'animales' ? '🦁' :
             currentModule === 'plantas' ? '🌱' : '🌍'}
          </Typography>
        </Box>
        
        <Box>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              textTransform: 'uppercase',
              color: theme.palette.primary.dark
            }}
          >
            Actividades: {
              currentModule === 'ciclovida' ? 'Ciclo de Vida' : 
              currentModule === 'animales' ? 'Animales' :
              currentModule === 'plantas' ? 'Plantas' : 'Ecosistema'
            }
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: theme.palette.text.secondary,
              fontSize: '1.1rem'
            }}
          >
            {filteredActivities.length} actividades para aprender y practicar
          </Typography>
        </Box>
      </Box>
      
      {/* Selector de módulos (botones grandes con íconos) */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          mb: 4,
          flexWrap: 'wrap',
          gap: 2
        }}
      >
        {Object.keys(activityData).map(moduleKey => (
          <Box 
            key={moduleKey}
            onClick={() => setCurrentModule(moduleKey)}
            sx={{
              cursor: 'pointer',
              backgroundColor: currentModule === moduleKey ? 
                (moduleKey === 'ciclovida' ? '#FFCDD2' : 
                 moduleKey === 'animales' ? '#BBDEFB' :
                 moduleKey === 'plantas' ? '#C8E6C9' : '#D1C4E9') : 
                'white',
              border: `3px solid ${
                moduleKey === 'ciclovida' ? '#F44336' : 
                moduleKey === 'animales' ? '#1976D2' :
                moduleKey === 'plantas' ? '#388E3C' : '#7B1FA2'
              }`,
              borderRadius: '12px',
              px: 3,
              py: 1.5,
              display: 'flex',
              alignItems: 'center',
              boxShadow: currentModule === moduleKey ? '0 4px 8px rgba(0,0,0,0.15)' : 'none',
              transform: currentModule === moduleKey ? 'translateY(-3px)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Typography variant="h5" sx={{ mr: 1 }}>
              {moduleKey === 'ciclovida' ? '👶' : 
               moduleKey === 'animales' ? '🦁' :
               moduleKey === 'plantas' ? '🌱' : '🌍'}
            </Typography>
            <Typography 
              variant="body1" 
              fontWeight={currentModule === moduleKey ? 'bold' : 'normal'}
              sx={{ fontSize: '1rem', textTransform: 'uppercase' }}
            >
              {moduleKey === 'ciclovida' ? 'Ciclo de Vida' : 
               moduleKey === 'animales' ? 'Animales' :
               moduleKey === 'plantas' ? 'Plantas' : 'Ecosistema'}
            </Typography>
          </Box>
        ))}
      </Box>
      
      {/* Pestañas simplificadas */}
      <TabsBar 
        value={tabValue} 
        onChange={(event, newValue) => setTabValue(newValue)} 
      />

      {/* Malla de tarjetas */}
      <Grid container spacing={3}>
        {filteredActivities.map((activity) => (
          <Grid item xs={12} sm={6} key={activity.id}>
            <ActivityCard 
              activity={activity}
              moduleColor={
                currentModule === 'ciclovida' ? '#F44336' : 
                currentModule === 'animales' ? '#1976D2' :
                currentModule === 'plantas' ? '#388E3C' : '#7B1FA2'
              }
            />
          </Grid>
        ))}
      </Grid>
      
      {/* Mensaje si no hay actividades */}
      {filteredActivities.length === 0 && (
        <Box 
          sx={{ 
            textAlign: 'center', 
            py: 8,
            bgcolor: 'rgba(0,0,0,0.02)',
            borderRadius: 4,
            mt: 3,
            border: '2px dashed rgba(0,0,0,0.1)'
          }}
        >
          <Typography variant="h1" sx={{ mb: 2 }}>
            {tabValue === 0 ? '📝' : '✅'}
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ fontWeight: 'bold', mb: 1 }}
          >
            NO HAY ACTIVIDADES {tabValue === 0 ? 'PENDIENTES' : 'COMPLETADAS'}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ maxWidth: '80%', mx: 'auto' }}
          >
            Las actividades aparecerán aquí cuando estén disponibles
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default ActivityView;