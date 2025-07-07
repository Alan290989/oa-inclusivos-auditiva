import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Tabs, 
  Tab, 
  useTheme,
  useMediaQuery,
  Divider,
  LinearProgress,
  Avatar,
  Button
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import AchievementCard from '../components/AchievementCard';
import CategoryTabs from '../components/CategoryTabs';

// Datos de logros (en una aplicación real vendría de un API)
const achievementsData = {
  modulos: [
    {
      id: 1,
      titulo: 'EXPLORADOR DE CICLOS',
      descripcion: 'Completa 3 actividades del módulo Ciclo de Vida',
      emoji: '👶👦👨',
      imagen: '/api/placeholder/100/100',
      progreso: 66, // 2 de 3 actividades
      total: 3,
      actual: 2,
      color: '#FFCDD2',
      borderColor: '#F44336',
      categoria: 'modulos',
      desbloqueado: true
    },
    {
      id: 2,
      titulo: 'AMIGO DE ANIMALES',
      descripcion: 'Completa 4 actividades del módulo Animales',
      emoji: '🦁🐘🐢',
      imagen: '/api/placeholder/100/100',
      progreso: 50, // 2 de 4 actividades
      total: 4,
      actual: 2,
      color: '#BBDEFB',
      borderColor: '#1976D2',
      categoria: 'modulos',
      desbloqueado: true
    },
    {
      id: 3,
      titulo: 'JARDINERO EXPERTO',
      descripcion: 'Completa todas las actividades del módulo Plantas',
      emoji: '🌱🌿🌳',
      imagen: '/api/placeholder/100/100',
      progreso: 20, // 1 de 5 actividades
      total: 5,
      actual: 1,
      color: '#C8E6C9',
      borderColor: '#388E3C',
      categoria: 'modulos',
      desbloqueado: true
    },
    {
      id: 4,
      titulo: 'GUARDIÁN DEL ECOSISTEMA',
      descripcion: 'Completa todas las actividades del módulo Ecosistema',
      emoji: '🌍🌊🏔️',
      imagen: '/api/placeholder/100/100',
      progreso: 0, // 0 de 5 actividades
      total: 5,
      actual: 0,
      color: '#D1C4E9',
      borderColor: '#7B1FA2',
      categoria: 'modulos',
      desbloqueado: false
    }
  ],
  precisión: [
    {
      id: 5,
      titulo: 'RESPUESTAS PERFECTAS',
      descripcion: 'Obtén 100% de precisión en 3 actividades',
      emoji: '💯',
      imagen: '/api/placeholder/100/100',
      progreso: 66, // 2 de 3 actividades
      total: 3,
      actual: 2,
      color: '#FFF9C4',
      borderColor: '#FBC02D',
      categoria: 'precisión',
      desbloqueado: true
    },
    {
      id: 6,
      titulo: 'SUPER CEREBRO',
      descripcion: 'Responde 20 preguntas correctamente en total',
      emoji: '🧠✨',
      imagen: '/api/placeholder/100/100',
      progreso: 75, // 15 de 20 preguntas
      total: 20,
      actual: 15,
      color: '#FFF9C4',
      borderColor: '#FBC02D',
      categoria: 'precisión',
      desbloqueado: true
    }
  ],
  constancia: [
    {
      id: 7,
      titulo: 'ESTUDIANTE DEDICADO',
      descripcion: 'Inicia sesión 5 días seguidos',
      emoji: '📅',
      imagen: '/api/placeholder/100/100',
      progreso: 80, // 4 de 5 días
      total: 5,
      actual: 4,
      color: '#FFCCBC',
      borderColor: '#E64A19',
      categoria: 'constancia',
      desbloqueado: true
    },
    {
      id: 8,
      titulo: 'CAMPEÓN DE CIENCIAS',
      descripcion: 'Completa al menos una actividad de cada módulo',
      emoji: '🏆🧪',
      imagen: '/api/placeholder/100/100',
      progreso: 75, // 3 de 4 módulos
      total: 4,
      actual: 3,
      color: '#FFCCBC',
      borderColor: '#E64A19',
      categoria: 'constancia',
      desbloqueado: true
    }
  ],
  especiales: [
    {
      id: 9,
      titulo: 'CIENTÍFICO MAESTRO',
      descripcion: 'Completa todas las actividades de ciencias',
      emoji: '🔬🎓',
      imagen: '/api/placeholder/100/100',
      progreso: 25, // 5 de 20 actividades totales
      total: 20,
      actual: 5,
      color: '#E1BEE7',
      borderColor: '#8E24AA',
      categoria: 'especiales',
      desbloqueado: true
    },
    {
      id: 10,
      titulo: 'EXPERTO EN LENGUAJE DE SEÑAS',
      descripcion: 'Aprende 30 señas nuevas relacionadas con ciencias',
      emoji: '👋🔬',
      imagen: '/api/placeholder/100/100',
      progreso: 50, // 15 de 30 señas
      total: 30,
      actual: 15,
      color: '#E1BEE7',
      borderColor: '#8E24AA',
      categoria: 'especiales',
      desbloqueado: true
    },
    {
      id: 11,
      titulo: '¡SORPRESA!',
      descripcion: 'Logro especial por descubrir',
      emoji: '🎁',
      imagen: '/api/placeholder/100/100',
      progreso: 0,
      total: 1,
      actual: 0,
      color: '#E1BEE7',
      borderColor: '#8E24AA',
      categoria: 'especiales',
      desbloqueado: false
    }
  ]
};

const AchievementsView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedCategory, setSelectedCategory] = useState('todos');
  
  // Filtra los logros según la categoría seleccionada
  const filteredAchievements = selectedCategory === 'todos' 
    ? [...achievementsData.modulos, ...achievementsData.precisión, ...achievementsData.constancia, ...achievementsData.especiales]
    : achievementsData[selectedCategory] || [];

  // Calcular estadísticas generales
  const totalAchievements = Object.values(achievementsData).flat().length;
  const unlockedAchievements = Object.values(achievementsData).flat().filter(a => a.progreso === 100).length;
  const inProgressAchievements = Object.values(achievementsData).flat().filter(a => a.progreso > 0 && a.progreso < 100).length;
  const overallProgress = Math.round((unlockedAchievements / totalAchievements) * 100);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
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
            backgroundColor: theme.palette.warning.main,
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
          <Typography variant="h2" sx={{ color: 'white' }}>
            🏆
          </Typography>
        </Box>
        
        <Box>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              textTransform: 'uppercase',
              color: theme.palette.warning.dark
            }}
          >
            Mis Logros
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: theme.palette.text.secondary,
              fontSize: '1.1rem'
            }}
          >
            ¡Completa actividades para desbloquear logros especiales!
          </Typography>
        </Box>
      </Box>

      {/* Tarjeta de resumen */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          mb: 4,
          border: `2px solid ${theme.palette.warning.light}`,
          position: 'relative'
        }}
      >
        {/* Formas decorativas */}
        <Box
          sx={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            backgroundColor: 'rgba(255,193,7,0.05)',
            borderRadius: '50%',
            top: '-100px',
            right: '-50px'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            backgroundColor: 'rgba(255,193,7,0.07)',
            borderRadius: '50%',
            bottom: '-70px',
            left: '10%'
          }}
        />

        <Box sx={{ p: 3, position: 'relative', zIndex: 1 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                RESUMEN DE LOGROS
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body1" fontWeight="medium">
                    Progreso general:
                  </Typography>
                  <Typography variant="body1" fontWeight="bold" color="warning.dark">
                    {overallProgress}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={overallProgress} 
                  sx={{ 
                    height: 12, 
                    borderRadius: 6,
                    backgroundColor: 'rgba(255,193,7,0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: theme.palette.warning.main
                    }
                  }}
                />
              </Box>
              
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" color="warning.main" fontWeight="bold">
                      {unlockedAchievements}
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      COMPLETADOS
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" color="info.main" fontWeight="bold">
                      {inProgressAchievements}
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      EN PROGRESO
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" color="text.secondary" fontWeight="bold">
                      {totalAchievements - (unlockedAchievements + inProgressAchievements)}
                    </Typography>
                    <Typography variant="body2" fontWeight="medium">
                      POR DESCUBRIR
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderLeft: { xs: 'none', md: `1px solid ${theme.palette.divider}` },
                pt: { xs: 2, md: 0 },
                mt: { xs: 2, md: 0 },
                borderTop: { xs: `1px solid ${theme.palette.divider}`, md: 'none' }
              }}
            >
              <Typography 
                variant="h6" 
                fontWeight="bold" 
                color="text.secondary" 
                gutterBottom 
                sx={{ textAlign: 'center' }}
              >
                PRÓXIMO LOGRO
              </Typography>
              
              {/* Mostrar el logro con más progreso que no esté completado */}
              {filteredAchievements
                .filter(a => a.progreso > 0 && a.progreso < 100)
                .sort((a, b) => b.progreso - a.progreso)[0] ? (
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    p: 2,
                    border: `2px solid ${theme.palette.warning.light}`,
                    borderRadius: 3,
                    bgcolor: 'rgba(255,193,7,0.05)',
                    width: '100%'
                  }}
                >
                  {(() => {
                    const nextAchievement = filteredAchievements
                      .filter(a => a.progreso > 0 && a.progreso < 100)
                      .sort((a, b) => b.progreso - a.progreso)[0];
                    
                    return (
                      <>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            bgcolor: nextAchievement.color,
                            border: `2px solid ${nextAchievement.borderColor}`
                          }}
                        >
                          <Typography variant="h5">
                            {nextAchievement.emoji}
                          </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body1" fontWeight="bold" sx={{ mb: 0.5 }}>
                            {nextAchievement.titulo}
                          </Typography>
                          <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
                            {nextAchievement.descripcion}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <LinearProgress
                              variant="determinate"
                              value={nextAchievement.progreso}
                              sx={{
                                height: 8,
                                borderRadius: 4,
                                flexGrow: 1,
                                mr: 1,
                                backgroundColor: 'rgba(0,0,0,0.05)',
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: nextAchievement.borderColor
                                }
                              }}
                            />
                            <Typography variant="caption" fontWeight="bold">
                              {nextAchievement.progreso}%
                            </Typography>
                          </Box>
                        </Box>
                      </>
                    );
                  })()}
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="body1">
                    No hay logros en progreso.
                  </Typography>
                </Box>
              )}
              
              <Button
                variant="contained"
                color="warning"
                sx={{
                  mt: 2,
                  borderRadius: 3,
                  fontWeight: 'bold',
                  px: 3
                }}
              >
                CONTINUAR APRENDIENDO
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      
      {/* Pestañas de categorías */}
      <CategoryTabs 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      
      {/* Grid de logros */}
      <Grid container spacing={3}>
        {filteredAchievements.map((achievement) => (
          <Grid item xs={12} sm={6} md={4} key={achievement.id}>
            <AchievementCard achievement={achievement} />
          </Grid>
        ))}
      </Grid>
      
      {/* Mensaje si no hay logros */}
      {filteredAchievements.length === 0 && (
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
            🏆
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ fontWeight: 'bold', mb: 1 }}
          >
            NO HAY LOGROS EN ESTA CATEGORÍA
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ maxWidth: '80%', mx: 'auto' }}
          >
            Completa actividades para desbloquear logros en esta categoría
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default AchievementsView;