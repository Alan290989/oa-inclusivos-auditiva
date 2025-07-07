import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { Chip, Grid, Divider, LinearProgress, useTheme, Button } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const ActivityCard = ({ activity, moduleColor }) => {
  const theme = useTheme();
  const { 
    title, 
    icon, 
    iconType,
    questions, 
    accuracy = 0, 
    completed, 
    inProgress,
    notStarted,
    duration,
    color
  } = activity;

  // Determinar el estado de la actividad para mostrar el ícono y texto adecuados
  const getStatusInfo = () => {
    if (completed) {
      return {
        icon: <CheckCircleOutlineIcon color="success" sx={{ mr: 1, fontSize: 24 }} />,
        text: "COMPLETADO",
        textColor: "success.main"
      };
    } else if (inProgress) {
      return {
        icon: <HourglassTopIcon sx={{ mr: 1, fontSize: 24, color: theme.palette.warning.main }} />,
        text: "EN PROGRESO",
        textColor: "warning.main"
      };
    } else {
      return {
        icon: <PlayCircleOutlineIcon sx={{ mr: 1, fontSize: 24, color: theme.palette.info.main }} />,
        text: "INICIAR",
        textColor: "info.main"
      };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <Card 
      sx={{ 
        borderRadius: 4,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
          cursor: "pointer",
        },
        border: `4px solid ${color}`,
        overflow: 'visible',
        position: 'relative'
      }}
    >
      {/* Badge para mostrar la seña */}
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        badgeContent={
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              border: `3px solid ${moduleColor}`,
              transform: 'translateY(-16px)'
            }}
          >
            <img 
              src="/api/placeholder/40/40" 
              alt={`Seña para ${title}`} 
            />
          </Box>
        }
      >
        {/* Encabezado */}
        <Box
          sx={{
            position: 'relative',
            height: 'auto',
            minHeight: '120px',
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            bgcolor: color,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 2,
            pt: 3
          }}
        >
          {/* Formas decorativas */}
          <Box
            sx={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              bgcolor: `rgba(255,255,255,0.15)`,
              borderRadius: '50%',
              bottom: '-220px',
              right: '-100px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              bgcolor: `rgba(255,255,255,0.2)`,
              borderRadius: '50%',
              top: '-30px',
              left: '30px',
            }}
          />
          
          {/* Contenido del encabezado */}
          <Box display="flex" alignItems="center" zIndex={1} mb={1}>
            <Typography 
              variant="h3" 
              sx={{ 
                color: '#fff', 
                mr: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {icon}
            </Typography>
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                {title}
              </Typography>
              <Chip 
                label={`${questions} preguntas`}
                size="small"
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.3)', 
                  color: 'white',
                  fontWeight: 500,
                  '& .MuiChip-label': {
                    px: 1.5,
                  }
                }} 
              />
            </Box>
          </Box>
        </Box>
      </Badge>

      <CardContent sx={{ p: 3 }}>
        {completed && (
          <>
            <Box 
              sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="subtitle2" color="text.secondary" fontWeight="bold">
                  CORRECTAS: 
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  fontWeight="bold" 
                  color="success.main"
                  sx={{ ml: 1 }}
                >
                  {accuracy}%
                </Typography>
              </Box>
              {completed && (
                <Box 
                  sx={{ 
                    bgcolor: 'success.light', 
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <CheckCircleOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} /> 
                  ¡BIEN!
                </Box>
              )}
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={accuracy} 
              color="success"
              sx={{ 
                height: 12, 
                borderRadius: 6,
                mb: 3,
                mt: 1,
                bgcolor: 'rgba(0,0,0,0.05)'
              }} 
            />
          </>
        )}
        
        {/* Estado de la actividad */}
        <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            border: `2px solid ${completed ? 'success.main' : inProgress ? 'warning.main' : 'info.main'}`,
            borderRadius: 2,
            py: 1,
            bgcolor: `${completed ? 'success.light' : inProgress ? 'warning.light' : 'info.light'}15`
          }}
        >
          {statusInfo.icon}
          <Typography 
            variant="subtitle1" 
            fontWeight="bold" 
            color={statusInfo.textColor}
          >
            {statusInfo.text}
          </Typography>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        {/* Tiempo */}
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <AccessTimeFilledIcon 
            sx={{ mr: 1, fontSize: 22, color: theme.palette.text.secondary }} 
          />
          <Typography 
            variant="body1" 
            color="text.secondary"
            fontWeight="medium"
          >
            {duration || 'Aproximadamente 5 minutos'}
          </Typography>
        </Box>
        
        {/* Botón de acción */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            borderRadius: '28px',
            py: 1.5,
            bgcolor: moduleColor,
            '&:hover': {
              bgcolor: theme.palette.mode === 'light' ? 
                `${moduleColor}dd` : `${moduleColor}bb`,
            },
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          {completed ? 'VER RESULTADOS' : inProgress ? 'CONTINUAR' : 'COMENZAR'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;