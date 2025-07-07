import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Paper
} from '@mui/material';
import { ArrowBack, ExpandMore, PlayArrow, Book, Assignment } from '@mui/icons-material';

// Datos detallados para cada módulo
const modulosDetallados = {
  'ciclo-vida': {
    titulo: 'Ciclo de Vida',
    descripcion: 'Etapas del crecimiento humano',
    emoji: '👶👦👨👴',
    color: '#FFCDD2',
    borderColor: '#F44336',
    imagenSeña: '/api/placeholder/100/100',
    lecciones: [
      {
        id: 1,
        titulo: 'BEBÉ',
        descripcion: 'Primera etapa de la vida',
        emoji: '👶',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Recién nacido', 'Crecimiento', 'Cuidados básicos'],
        videoSeña: '/api/placeholder/video', // Placeholder para video de seña
        actividades: ['Identificar características del bebé', 'Cuidados que necesita']
      },
      {
        id: 2,
        titulo: 'NIÑO',
        descripcion: 'Etapa de crecimiento y aprendizaje',
        emoji: '👦',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Juegos', 'Escuela', 'Desarrollo'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Actividades de niños', 'Diferencias con bebés']
      },
      {
        id: 3,
        titulo: 'ADULTO',
        descripcion: 'Etapa de madurez y trabajo',
        emoji: '👨',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Trabajo', 'Responsabilidades', 'Familia'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Roles del adulto', 'Responsabilidades']
      },
      {
        id: 4,
        titulo: 'ANCIANO',
        descripcion: 'Etapa de experiencia y sabiduría',
        emoji: '👴',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Experiencia', 'Sabiduría', 'Cuidados especiales'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Características del anciano', 'Respeto a los mayores']
      }
    ]
  },
  'animales': {
    titulo: 'Animales',
    descripcion: 'Diferentes tipos de animales',
    emoji: '🐘🦁🐢🦜',
    color: '#BBDEFB',
    borderColor: '#1976D2',
    imagenSeña: '/api/placeholder/100/100',
    lecciones: [
      {
        id: 1,
        titulo: 'ANIMALES GRANDES',
        descripcion: 'Animales de gran tamaño',
        emoji: '🐘',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Elefante', 'Jirafa', 'Hipopótamo', 'Oso'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Identificar animales grandes', 'Comparar tamaños']
      },
      {
        id: 2,
        titulo: 'ANIMALES SALVAJES',
        descripción: 'Animales que viven en libertad',
        emoji: '🦁',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['León', 'Tigre', 'Lobo', 'Leopardo'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Reconocer animales salvajes', 'Hábitats naturales']
      },
      {
        id: 3,
        titulo: 'ANIMALES ACUÁTICOS',
        descripcion: 'Animales que viven en el agua',
        emoji: '🐢',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Tortuga', 'Pez', 'Delfín', 'Ballena'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Animales del mar', 'Animales del río']
      },
      {
        id: 4,
        titulo: 'AVES',
        descripcion: 'Animales que vuelan',
        emoji: '🦜',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Loro', 'Águila', 'Paloma', 'Colibrí'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Tipos de aves', 'Características de las aves']
      }
    ]
  },
  'plantas': {
    titulo: 'Plantas',
    descripcion: 'Partes y vida de las plantas',
    emoji: '🌱🌿🌳🌻',
    color: '#C8E6C9',
    borderColor: '#388E3C',
    imagenSeña: '/api/placeholder/100/100',
    lecciones: [
      {
        id: 1,
        titulo: 'SEMILLA',
        descripcion: 'Inicio de la vida de la planta',
        emoji: '🌱',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Germinación', 'Crecimiento', 'Raíz'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Plantar semillas', 'Observar crecimiento']
      },
      {
        id: 2,
        titulo: 'HOJAS',
        descripcion: 'Partes verdes de la planta',
        emoji: '🌿',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Fotosíntesis', 'Verde', 'Oxígeno'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Identificar tipos de hojas', 'Función de las hojas']
      },
      {
        id: 3,
        titulo: 'ÁRBOL',
        descripcion: 'Plantas grandes y fuertes',
        emoji: '🌳',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Tronco', 'Ramas', 'Corteza', 'Sombra'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Partes del árbol', 'Beneficios de los árboles']
      },
      {
        id: 4,
        titulo: 'FLORES',
        descripcion: 'Partes coloridas de las plantas',
        emoji: '🌻',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Colores', 'Pétalos', 'Abejas', 'Belleza'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Tipos de flores', 'Colores de flores']
      }
    ]
  },
  'ecosistema': {
    titulo: 'Ecosistema',
    descripcion: 'Dónde viven los seres vivos',
    emoji: '🌍🌊🏔️🌵',
    color: '#D1C4E9',
    borderColor: '#7B1FA2',
    imagenSeña: '/api/placeholder/100/100',
    lecciones: [
      {
        id: 1,
        titulo: 'TIERRA',
        descripcion: 'Nuestro planeta hogar',
        emoji: '🌍',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Planeta', 'Continentes', 'Países', 'Hogar'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Cuidar la Tierra', 'Lugares del mundo']
      },
      {
        id: 2,
        titulo: 'OCÉANO',
        descripcion: 'Grandes masas de agua',
        emoji: '🌊',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Agua salada', 'Olas', 'Peces', 'Profundo'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Vida marina', 'Importancia del océano']
      },
      {
        id: 3,
        titulo: 'MONTAÑA',
        descripcion: 'Elevaciones de tierra muy altas',
        emoji: '🏔️',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Alto', 'Nieve', 'Escalada', 'Frío'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Animales de montaña', 'Clima de montaña']
      },
      {
        id: 4,
        titulo: 'DESIERTO',
        descripcion: 'Lugares con poca agua',
        emoji: '🌵',
        imagenSeña: '/api/placeholder/80/80',
        imagenGrande: '/api/placeholder/200/150',
        conceptos: ['Arena', 'Calor', 'Cactus', 'Poca agua'],
        videoSeña: '/api/placeholder/video',
        actividades: ['Vida en el desierto', 'Adaptación al calor']
      }
    ]
  }
};

// Componente para página individual de módulo
function ModuloIndividual({ moduloId, onVolver }) {
  const [leccionActiva, setLeccionActiva] = useState(null);
  const modulo = modulosDetallados[moduloId];

  if (!modulo) {
    return <Typography>Módulo no encontrado</Typography>;
  }

  return (
    <Box p={4} sx={{ 
      backgroundColor: '#FFF8E1', 
      borderRadius: '16px',
      border: '6px solid #FFD54F',
      minHeight: '100vh'
    }}>
      {/* Header del módulo */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
        <Button 
          onClick={onVolver}
          startIcon={<ArrowBack />}
          sx={{ 
            marginRight: 2,
            backgroundColor: 'white',
            border: '2px solid #FFD54F',
            borderRadius: '12px',
            padding: '8px 16px'
          }}
        >
          VOLVER
        </Button>
        
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#5D4037',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: 2,
              marginRight: 2,
              border: `4px solid ${modulo.borderColor}`
            }}>
              <img src={modulo.imagenSeña} alt={`Seña de ${modulo.titulo}`} />
            </Box>
            {modulo.titulo}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: '1.5rem', marginTop: 1 }}>
            {modulo.descripcion}
          </Typography>
        </Box>
      </Box>

      {/* Lista de lecciones */}
      <Grid container spacing={3}>
        {modulo.lecciones.map(leccion => (
          <Grid item xs={12} md={6} key={leccion.id}>
            <Card 
              elevation={6} 
              sx={{ 
                borderRadius: '16px',
                backgroundColor: modulo.color,
                border: `4px solid ${modulo.borderColor}`,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)'
                }
              }}
              onClick={() => setLeccionActiva(leccion)}
            >
              <CardContent sx={{ padding: 3 }}>
                {/* Header de la lección */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 2
                }}>
                  <Typography variant="h2" sx={{ fontSize: '3rem' }}>
                    {leccion.emoji}
                  </Typography>
                  <Box sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    padding: 1,
                    border: '2px solid rgba(0,0,0,0.1)'
                  }}>
                    <img src={leccion.imagenSeña} alt={`Seña para ${leccion.titulo}`} />
                  </Box>
                </Box>

                {/* Imagen ilustrativa */}
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                  <img 
                    src={leccion.imagenGrande} 
                    alt={leccion.titulo}
                    style={{
                      borderRadius: '12px',
                      border: '3px solid white',
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </Box>

                {/* Título y descripción */}
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 1,
                    textTransform: 'uppercase'
                  }}
                >
                  {leccion.titulo}
                </Typography>
                
                <Typography 
                  variant="body1"
                  sx={{ 
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    marginBottom: 2
                  }}
                >
                  {leccion.descripcion}
                </Typography>

                {/* Conceptos clave */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                  {leccion.conceptos.map((concepto, index) => (
                    <Chip 
                      key={index}
                      label={concepto}
                      sx={{ 
                        backgroundColor: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                      }}
                    />
                  ))}
                </Box>

                {/* Botón de acción */}
                <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<PlayArrow />}
                    sx={{
                      backgroundColor: modulo.borderColor,
                      borderRadius: '20px',
                      padding: '10px 20px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    APRENDER
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal/Detalle de lección (simplificado) */}
      {leccionActiva && (
        <Paper 
          sx={{ 
            position: 'fixed', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '600px',
            maxHeight: '80%',
            overflow: 'auto',
            padding: 4,
            borderRadius: '16px',
            border: `4px solid ${modulo.borderColor}`,
            backgroundColor: modulo.color,
            zIndex: 1000
          }}
        >
          <Box sx={{ textAlign: 'right', marginBottom: 2 }}>
            <Button 
              onClick={() => setLeccionActiva(null)}
              sx={{ minWidth: 'auto', padding: 1 }}
            >
              ✕
            </Button>
          </Box>
          
          <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3, fontWeight: 'bold' }}>
            {leccionActiva.titulo}
          </Typography>

          <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
            <img 
              src={leccionActiva.imagenGrande} 
              alt={leccionActiva.titulo}
              style={{ maxWidth: '100%', borderRadius: '12px' }}
            />
          </Box>

          <Accordion sx={{ marginBottom: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <Book sx={{ marginRight: 1 }} />
                CONCEPTOS
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {leccionActiva.conceptos.map((concepto, index) => (
                  <Chip 
                    key={index}
                    label={concepto}
                    sx={{ backgroundColor: 'white', fontWeight: 'bold' }}
                  />
                ))}
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                <Assignment sx={{ marginRight: 1 }} />
                ACTIVIDADES
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {leccionActiva.actividades.map((actividad, index) => (
                <Typography key={index} sx={{ marginBottom: 1, fontSize: '1.1rem' }}>
                  • {actividad}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        </Paper>
      )}
    </Box>
  );
}

// Componente principal que maneja la navegación
export default function ModulosApp() {
  const [moduloActivo, setModuloActivo] = useState(null);

  // Vista principal con todos los módulos (tu componente original adaptado)
  const VistaModulos = () => (
    <Box p={4} sx={{ 
      backgroundColor: '#FFF8E1', 
      borderRadius: '16px',
      border: '6px solid #FFD54F'
    }}>
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
          justifyContent: 'center'
        }}
      >
        <img 
          src="/api/placeholder/40/40" 
          alt="Seña de Ciencias" 
          style={{ marginRight: '12px' }}
        />
        MÓDULOS DE CIENCIAS
      </Typography>
      
      <Grid container spacing={4}>
        {Object.entries(modulosDetallados).map(([id, modulo]) => (
          <Grid item xs={12} md={6} key={id}>
            <Card 
              elevation={6} 
              sx={{ 
                borderRadius: '16px',
                backgroundColor: modulo.color,
                height: '100%',
                border: `4px solid ${modulo.borderColor}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 16px rgba(0,0,0,0.2)'
                }
              }}
              onClick={() => setModuloActivo(id)}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 3 }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginBottom: 2
                }}>
                  <Typography variant="h1" sx={{ fontSize: '3rem' }}>
                    {modulo.emoji}
                  </Typography>
                  <Box sx={{
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    padding: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.2)'
                  }}>
                    <img src={modulo.imagenSeña} alt={`Seña para ${modulo.titulo}`} />
                  </Box>
                </Box>
                
                <Typography 
                  variant="h5" 
                  component="div" 
                  sx={{ 
                    fontSize: '1.8rem', 
                    fontWeight: 'bold',
                    marginBottom: 1,
                    textAlign: 'center',
                    textTransform: 'uppercase'
                  }}
                >
                  {modulo.titulo}
                </Typography>
                
                <Typography 
                  variant="body1"
                  sx={{ 
                    fontSize: '1.4rem',
                    fontWeight: '500',
                    textAlign: 'center',
                    marginBottom: 2
                  }}
                >
                  {modulo.descripcion}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <Chip 
                    label={`${modulo.lecciones.length} LECCIONES`}
                    sx={{ 
                      backgroundColor: 'white',
                      fontWeight: 'bold',
                      fontSize: '1rem'
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: modulo.borderColor,
                      borderRadius: '20px',
                      padding: '8px 20px',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: modulo.borderColor,
                        opacity: 0.8
                      }
                    }}
                  >
                    ENTRAR AL MÓDULO
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Renderizado condicional
  if (moduloActivo) {
    return (
      <ModuloIndividual 
        moduloId={moduloActivo} 
        onVolver={() => setModuloActivo(null)}
      />
    );
  }

  return <VistaModulos />;
}