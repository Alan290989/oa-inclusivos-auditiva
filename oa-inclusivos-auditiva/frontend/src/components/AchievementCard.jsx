import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  LinearProgress, 
  Badge,
  Divider,
  Button,
  Chip
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import StarIcon from '@mui/icons-material/Star';

const AchievementCard = ({ achievement }) => {
  const { 
    titulo, 
    descripcion, 
    emoji,
    progreso, 
    total, 
    actual, 
    color, 
    borderColor, 
    desbloqueado 
  } = achievement;

  // Determinar si el logro está completado
  const isCompleted = progreso === 100;

  return (
    <Card
      elevation={desbloqueado ? 2 : 0}
      sx={{
        borderRadius: 4,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": desbloqueado ? {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        } : {},
        border: `3px solid ${desbloqueado ? borderColor : 'rgba(0,0,0,0.1)'}`,
        position: 'relative',
        filter: desbloqueado ? 'none' : 'grayscale(1)',
        opacity: desbloqueado ? 1 : 0.6,
        overflow: 'visible'
      }}
    >
      {/* Badge para completado o bloqueado */}
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        badgeContent={
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isCompleted ? 'success.main' : 
                               !desbloqueado ? 'action.disabledBackground' : 
                               'white',
              border: isCompleted ? '2px solid #4CAF50' : 
                      !desbloqueado ? '2px solid rgba(0,0,0,0.2)' : 
                      `2px solid ${borderColor}`,
              transform: 'translate(8px, -8px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {isCompleted ? (
              <CheckCircleIcon sx={{ fontSize: 20, color: 'white' }} />
            ) : !desbloqueado ? (
              <LockIcon sx={{ fontSize: 18, color: 'rgba(0,0,0,0.5)' }} />
            ) : (
              <StarIcon sx={{ fontSize: 18, color: borderColor }} />
            )}
          </Box>
        }
      >
        {/* Encabezado */}
        <Box
          sx={{
            position: 'relative',
            height: 120,
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            bgcolor: color,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2
          }}
        >
          {/* Formas decorativas */}
          <Box
            sx={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              bgcolor: `rgba(255,255,255,0.15)`,
              borderRadius: '50%',
              bottom: '-60px',
              right: '-20px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              bgcolor: `rgba(255,255,255,0.2)`,
              borderRadius: '50%',
              top: '-20px',
              left: '20px',
            }}
          />
          
          {/* Representación gráfica del logro */}
          <Box 
            sx={{ 
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Si hay imagen de seña, mostrarla */}
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.9)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: `3px solid ${borderColor}`,
                mb: 1
              }}
            >
              {desbloqueado ? (
                <Typography variant="h3">
                  {emoji}
                </Typography>
              ) : (
                <LockIcon sx={{ fontSize: 40, color: 'rgba(0,0,0,0.5)' }} />
              )}
            </Box>
          </Box>
        </Box>
      </Badge>

      <CardContent sx={{ p: 3 }}>
        {/* Título y descripción */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 1,
              color: desbloqueado ? 'text.primary' : 'text.disabled'
            }}
          >
            {titulo}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: desbloqueado ? 'text.secondary' : 'text.disabled',
              minHeight: '40px'
            }}
          >
            {!desbloqueado ? '???' : descripcion}
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        {/* Barra de progreso */}
        <Box sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2" color={desbloqueado ? "text.secondary" : "text.disabled"}>
              Progreso:
            </Typography>
            <Typography 
              variant="body2" 
              fontWeight="bold" 
              color={isCompleted ? "success.main" : desbloqueado ? borderColor : "text.disabled"}
            >
              {desbloqueado ? `${actual}/${total}` : "???"}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progreso}
            sx={{
              height: 10,
              borderRadius: 5,
              backgroundColor: 'rgba(0,0,0,0.05)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: isCompleted ? 'success.main' : borderColor
              }
            }}
          />
        </Box>
        
        {/* Etiqueta de estado */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Chip 
            label={isCompleted ? "COMPLETADO" : desbloqueado ? "EN PROGRESO" : "BLOQUEADO"} 
            color={isCompleted ? "success" : desbloqueado ? "primary" : "default"}
            variant={desbloqueado ? "filled" : "outlined"}
            sx={{ 
              fontWeight: 'bold',
              backgroundColor: isCompleted ? "success.main" : 
                              desbloqueado ? borderColor : "transparent",
              color: desbloqueado ? "white" : "text.disabled"
            }}
          />
        </Box>
        
        {/* Botón de acción */}
        <Button
          variant="contained"
          fullWidth
          disabled={!desbloqueado}
          sx={{
            borderRadius: '28px',
            py: 1.2,
            bgcolor: desbloqueado ? borderColor : 'action.disabledBackground',
            '&:hover': {
              bgcolor: desbloqueado ? `${borderColor}dd` : 'action.disabledBackground',
            },
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          {isCompleted ? "VER DETALLES" : desbloqueado ? "CONTINUAR" : "BLOQUEADO"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AchievementCard;