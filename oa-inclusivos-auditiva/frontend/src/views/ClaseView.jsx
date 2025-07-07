// views/ClaseView.js
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

const modulosData = [
  { 
    id: 'ciclo-vida',
    titulo: 'Ciclo de Vida', 
    descripcion: 'Etapas del crecimiento humano',
    emoji: '👶👦👨👴',
    imagenSeña: '/assets/senas/ciclo_vida.png',
    color: '#FFCDD2',
    iconoGrande: '/assets/senas/ciclo_vida_icono.png',
    contenido: {
      introduccion: 'El ciclo de vida humano comprende diferentes etapas desde el nacimiento hasta la vejez.',
      etapas: [
        { nombre: 'Bebé', edad: '0-2 años', descripcion: 'Etapa de rápido crecimiento y desarrollo' },
        { nombre: 'Niño', edad: '3-12 años', descripcion: 'Desarrollo físico y cognitivo acelerado' },
        { nombre: 'Adolescente', edad: '13-18 años', descripcion: 'Cambios físicos y emocionales importantes' },
        { nombre: 'Adulto', edad: '19-65 años', descripcion: 'Madurez física y estabilidad' },
        { nombre: 'Adulto Mayor', edad: '65+ años', descripcion: 'Experiencia y sabiduría acumulada' }
      ]
    }
  },
  { 
    id: 'animales',
    titulo: 'Animales', 
    descripcion: 'Diferentes tipos de animales',
    emoji: '🐘🦁🐢🦜',
    imagenSeña: '/assets/senas/animales.png',
    color: '#BBDEFB',
    iconoGrande: '/assets/senas/animal_icono.png',
    contenido: {
      introduccion: 'Los animales son seres vivos que se mueven, respiran y se alimentan.',
      categorias: [
        { nombre: 'Mamíferos', ejemplos: 'Elefante, León, Perro, Gato', caracteristicas: 'Tienen pelo y alimentan a sus crías con leche' },
        { nombre: 'Aves', ejemplos: 'Loro, Águila, Pingüino', caracteristicas: 'Tienen plumas y la mayoría puede volar' },
        { nombre: 'Reptiles', ejemplos: 'Tortuga, Serpiente, Lagarto', caracteristicas: 'Tienen escamas y son de sangre fría' },
        { nombre: 'Peces', ejemplos: 'Tiburón, Pez payaso, Atún', caracteristicas: 'Viven en el agua y respiran por branquias' }
      ]
    }
  },
  { 
    id: 'plantas',
    titulo: 'Plantas', 
    descripcion: 'Partes y vida de las plantas',
    emoji: '🌱🌿🌳🌻',
    imagenSeña: '/assets/senas/plantas.png',
    color: '#C8E6C9',
    iconoGrande: '/assets/senas/planta_icono.png',
    contenido: {
      introduccion: 'Las plantas son seres vivos que producen su propio alimento usando la luz solar.',
      partes: [
        { nombre: 'Raíz', funcion: 'Absorbe agua y nutrientes del suelo' },
        { nombre: 'Tallo', funcion: 'Sostiene la planta y transporta nutrientes' },
        { nombre: 'Hojas', funcion: 'Realizan la fotosíntesis para producir alimento' },
        { nombre: 'Flores', funcion: 'Se encargan de la reproducción de la planta' },
        { nombre: 'Frutos', funcion: 'Protegen las semillas' }
      ]
    }
  },
  { 
    id: 'ecosistema',
    titulo: 'Ecosistema', 
    descripcion: 'Dónde viven los seres vivos',
    emoji: '🌍🌊🏔️🌵',
    imagenSeña: '/assets/senas/ecosistema.png',
    color: '#D1C4E9',
    iconoGrande: '/assets/senas/ecosistema_icono.png',
    contenido: {
      introduccion: 'Un ecosistema es el lugar donde viven los seres vivos y cómo se relacionan entre sí.',
      tipos: [
        { nombre: 'Bosque', descripcion: 'Muchos árboles, animales como osos y ciervos', clima: 'Húmedo y templado' },
        { nombre: 'Océano', descripcion: 'Agua salada, peces, ballenas y corales', clima: 'Varía según la profundidad' },
        { nombre: 'Desierto', descripcion: 'Muy seco, cactus, serpientes y camellos', clima: 'Muy caliente de día, frío de noche' },
        { nombre: 'Montaña', descripcion: 'Altitud elevada, cabras montesas, águilas', clima: 'Frío y con vientos fuertes' }
      ]
    }
  },
];

export default function ClaseView() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const modulo = modulosData.find(m => m.id === id);
  
  if (!modulo) {
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h4" color="error" gutterBottom>
          Clase no encontrada
        </Typography>
        <Button 
          onClick={() => navigate('/clases')} 
          variant="contained" 
          sx={{ mt: 2 }}
        >
          Volver a Clases
        </Button>
      </Box>
    );
  }

  const borderColor = modulo.color === '#FFCDD2' ? '#F44336' : 
                     modulo.color === '#BBDEFB' ? '#1976D2' : 
                     modulo.color === '#C8E6C9' ? '#388E3C' : '#7B1FA2';

  return (
    <Box sx={{ 
      backgroundColor: modulo.color, 
      borderRadius: '16px',
      minHeight: '80vh',
      p: 4,
      border: `4px solid ${borderColor}`
    }}>
      {/* Header con botón de volver */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Button 
          onClick={() => navigate('/clases')}
          variant="outlined"
          startIcon={<ArrowBack />}
          sx={{ 
            mr: 3,
            backgroundColor: 'white',
            '&:hover': { backgroundColor: '#f5f5f5' }
          }}
        >
          Volver a Clases
        </Button>
        <Typography variant="h3" sx={{ 
          fontWeight: 'bold', 
          color: '#3E2723',
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}>
          {modulo.titulo} 
          <Typography variant="h2" component="span">
            {modulo.emoji}
          </Typography>
        </Typography>
      </Box>
      
      {/* Imagen principal */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <img 
          src={modulo.iconoGrande} 
          alt={modulo.titulo}
          style={{ 
            maxWidth: '300px', 
            borderRadius: '16px',
            border: '3px solid white',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}
        />
      </Box>
      
      {/* Descripción principal */}
      <Card sx={{ mb: 4, backgroundColor: 'white', border: `2px solid ${borderColor}` }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#3E2723' }}>
            ¿Qué aprenderemos?
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#4E342E' }}>
            {modulo.contenido.introduccion}
          </Typography>
        </CardContent>
      </Card>

      {/* Contenido específico según el módulo */}
      <Grid container spacing={3}>
        {/* Para Ciclo de Vida - mostrar etapas */}
        {modulo.id === 'ciclo-vida' && modulo.contenido.etapas?.map((etapa, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ backgroundColor: 'white', border: `2px solid ${borderColor}` }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: borderColor, mb: 1 }}>
                  {etapa.nombre} ({etapa.edad})
                </Typography>
                <Typography variant="body2" sx={{ color: '#4E342E' }}>
                  {etapa.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Para Animales - mostrar categorías */}
        {modulo.id === 'animales' && modulo.contenido.categorias?.map((categoria, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ backgroundColor: 'white', border: `2px solid ${borderColor}` }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: borderColor, mb: 1 }}>
                  {categoria.nombre}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4E342E', mb: 1 }}>
                  <strong>Ejemplos:</strong> {categoria.ejemplos}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4E342E' }}>
                  <strong>Características:</strong> {categoria.caracteristicas}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Para Plantas - mostrar partes */}
        {modulo.id === 'plantas' && modulo.contenido.partes?.map((parte, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ backgroundColor: 'white', border: `2px solid ${borderColor}` }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: borderColor, mb: 1 }}>
                  {parte.nombre}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4E342E' }}>
                  {parte.funcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Para Ecosistema - mostrar tipos */}
        {modulo.id === 'ecosistema' && modulo.contenido.tipos?.map((tipo, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ backgroundColor: 'white', border: `2px solid ${borderColor}` }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: borderColor, mb: 1 }}>
                  {tipo.nombre}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4E342E', mb: 1 }}>
                  <strong>Descripción:</strong> {tipo.descripcion}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4E342E' }}>
                  <strong>Clima:</strong> {tipo.clima}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}