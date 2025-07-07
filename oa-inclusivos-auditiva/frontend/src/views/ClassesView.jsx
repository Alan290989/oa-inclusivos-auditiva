import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Explore } from '@mui/icons-material';

const modulosData = [
  { 
    id: 'ciclo-vida',
    titulo: 'Ciclo de Vida', 
    descripcion: 'Etapas del crecimiento humano',
    emoji: '👶👦👨👴',
    imagenSeña: '/assets/senas/Ciclo_Vital.png',
    color: '#FFCDD2',
    iconoGrande: '/assets/senas/ciclo_vida_icono.png'
  },
  { 
    id: 'animales',
    titulo: 'Animales', 
    descripcion: 'Diferentes tipos de animales',
    emoji: '🐘🦁🐢🦜',
    imagenSeña: '/assets/senas/animal.JPG',
    color: '#BBDEFB',
    iconoGrande: '/assets/senas/animal_icono.png'
  },
  { 
    id: 'plantas',
    titulo: 'Plantas', 
    descripcion: 'Partes y vida de las plantas',
    emoji: '🌱🌿🌳🌻',
    imagenSeña: '/assets/senas/planta sena.JPG',
    color: '#C8E6C9',
    iconoGrande: '/assets/senas/planta_icono.png'
  },
  { 
    id: 'ecosistema',
    titulo: 'Ecosistema', 
    descripcion: 'Dónde viven los seres vivos',
    emoji: '🌍🌊🏔️🌵',
    imagenSeña: '/assets/senas/Ecosistema.JPG',
    color: '#D1C4E9',
    iconoGrande: '/assets/senas/ecosistema_icono.png'
  },
];

export default function ClassesView() {
  const navigate = useNavigate();

  const handleExplorar = (moduloId) => {
    switch (moduloId) {
      case 'ciclo-vida':
        navigate('/clase/ciclo-vida');
        break;
      case 'animales':
        navigate('/clase/animales');
        break;
      case 'plantas':
        navigate('/clase/plantas');
        break;
      case 'ecosistema':
        navigate('/clase/ecosistema');
        break;
      default:
        navigate(`/clase/${moduloId}`);
    }
  };

  return (
    <Box
      p={4}
      sx={{
        backgroundColor: '#FFF8E1',
        borderRadius: '16px',
        border: '6px solid #FFD54F',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#5D4037',
          marginBottom: 4,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src="/assets/senas/Ciencias_Naturales.png"
          alt="Seña de Ciencias"
          style={{
            marginRight: '12px',
            width: '120px',
            height: '130px',
            borderRadius: '16px',
            border: '3px solid #FFD54F',
          }}
        />
        CIENCIAS NATURALES
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {modulosData.map(({ id, titulo, descripcion, emoji, imagenSeña, color, iconoGrande }, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              elevation={6}
              sx={{
                borderRadius: '24px',
                backgroundColor: color,
                height: '100%',
                border: '4px solid',
                borderColor:
                  color === '#FFCDD2' ? '#F44336' :
                  color === '#BBDEFB' ? '#1976D2' :
                  color === '#C8E6C9' ? '#388E3C' :
                  '#7B1FA2',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  justifyContent: 'space-between',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: 2,
                    }}
                  >
                    <Typography variant="h1" sx={{ fontSize: '3rem' }}>
                      {emoji}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        padding: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
                      }}
                    >
                      <img
                        src={imagenSeña}
                        alt={`Seña para ${titulo}`}
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                        }}
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                      marginBottom: 2,
                    }}
                  >
                    <img
                      src={iconoGrande}
                      alt={`Ilustración de ${titulo}`}
                      style={{
                        borderRadius: '12px',
                        border: '2px solid white',
                        maxHeight: '130px',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      marginBottom: 1,
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      color: '#3E2723',
                    }}
                  >
                    {titulo}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.3rem',
                      fontWeight: '500',
                      textAlign: 'center',
                      color: '#4E342E',
                      marginBottom: 2,
                    }}
                  >
                    {descripcion}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => handleExplorar(id)}
                  startIcon={<Explore />}
                  sx={{
                    backgroundColor:
                      color === '#FFCDD2' ? '#F44336' :
                      color === '#BBDEFB' ? '#1976D2' :
                      color === '#C8E6C9' ? '#388E3C' :
                      '#7B1FA2',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    padding: '12px 24px',
                    borderRadius: '20px',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    '&:hover': {
                      backgroundColor:
                        color === '#FFCDD2' ? '#D32F2F' :
                        color === '#BBDEFB' ? '#1565C0' :
                        color === '#C8E6C9' ? '#2E7D32' :
                        '#6A1B9A',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  Explorar
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
