import React, { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TimerIcon from "@mui/icons-material/Timer";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

// Aquí puedes reemplazar esta ruta con la ruta correcta al gif o imagen de la seña "bienvenida"
const SEÑA_BIENVENIDA_URL = "/assets/senas/bienvenida.png"; // Asegúrate de colocar el gif en public/assets/senas/

const HomeView = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [mostrarVideoSenas, setMostrarVideoSenas] = useState(true);

  // Datos de los módulos educativos
  const modulos = [
    {
      id: 1,
      titulo: "Ciclo de Vida",
      emoji: "👶👦👨👴",
      descripcion: "Etapas del crecimiento humano",
      color: "#FFCDD2", // Color rosado suave
      borderColor: "#F44336",
      actividades: 4,
      progreso: 50,
    },
    {
      id: 2,
      titulo: "Animales",
      emoji: "🐘🦁🐢🦜",
      descripcion: "Diferentes tipos de animales",
      color: "#BBDEFB", // Color azul suave
      borderColor: "#1976D2",
      actividades: 6,
      progreso: 66,
    },
    {
      id: 3,
      titulo: "Plantas",
      emoji: "🌱🌿🌳🌻",
      descripcion: "Partes y vida de las plantas",
      color: "#C8E6C9", // Color verde suave
      borderColor: "#388E3C",
      actividades: 5,
      progreso: 40,
    },
    {
      id: 4,
      titulo: "Ecosistema",
      emoji: "🌍🌊🏔️🌵",
      descripcion: "Dónde viven los seres vivos",
      color: "#D1C4E9", // Color lila suave
      borderColor: "#7B1FA2",
      actividades: 5,
      progreso: 20,
    },
  ];

  // Datos de actividades destacadas
  const actividadesDestacadas = [
    {
      id: 1,
      titulo: "ANIMALES SALVAJES",
      modulo: "Animales",
      emoji: "🦁",
      color: "#BBDEFB",
      borderColor: "#1976D2",
      estado: "continuar",
      progreso: 60,
    },
    {
      id: 2,
      titulo: "PARTES DE PLANTAS",
      modulo: "Plantas",
      emoji: "🌱",
      color: "#C8E6C9",
      borderColor: "#388E3C",
      estado: "nuevo",
      progreso: 0,
    },
  ];

  // Datos de logros del estudiante
  const estatusEstudiante = {
    nombre: "María",
    emoji: "👧",
    puntos: 120,
    actividades: {
      completadas: 8,
      enProgreso: 4,
      nuevas: 8,
    },
    ultimoIngreso: "Ayer",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Sección de bienvenida con imagen de seña */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
          position: "relative",
          overflow: "hidden",
        }}
      >

        
        {/* Círculos decorativos */}
        <Box
          sx={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.1)",
            top: "-50px",
            right: "-50px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.1)",
            bottom: "-40px",
            left: "15%",
          }}
        />

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    mr: 2,
                  }}
                >
                  ¡HOLA {estatusEstudiante.nombre}!
                </Typography>
                <Typography variant="h2">{estatusEstudiante.emoji}</Typography>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 3,
                  fontWeight: "medium",
                  opacity: 0.9,
                }}
              >
                BIENVENIDO A TU CLASE DE CIENCIAS
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "white",
                    color: theme.palette.primary.main,
                    borderRadius: 3,
                    px: 3,
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.9)",
                    },
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                  startIcon={<AutoStoriesIcon />}
                >
                  CONTINUAR APRENDIENDO
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "white",
                    color: "white",
                    borderRadius: 3,
                    px: 3,
                    borderWidth: 2,
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                  startIcon={<BookIcon />}
                >
                  VER TODOS LOS TEMAS
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Avatar
                sx={{
                  width: 180,
                  height: 180,
                  backgroundColor: "white",
                  border: "4px solid rgba(255,255,255,0.5)",
                }}
              >
                <img
                  src={SEÑA_BIENVENIDA_URL}
                  alt="Seña de Bienvenida"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Estadísticas del estudiante */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={4}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              borderRadius: 4,
              textAlign: "center",
              border: `2px solid ${theme.palette.success.light}`,
              height: "100%",
            }}
          >
            <CheckCircleIcon
              sx={{
                color: theme.palette.success.main,
                fontSize: 40,
                mb: 1,
              }}
            />
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: theme.palette.success.main }}
            >
              {estatusEstudiante.actividades.completadas}
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              COMPLETADAS
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              borderRadius: 4,
              textAlign: "center",
              border: `2px solid ${theme.palette.warning.light}`,
              height: "100%",
            }}
          >
            <TimerIcon
              sx={{
                color: theme.palette.warning.main,
                fontSize: 40,
                mb: 1,
              }}
            />
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: theme.palette.warning.main }}
            >
              {estatusEstudiante.actividades.enProgreso}
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              EN PROGRESO
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              borderRadius: 4,
              textAlign: "center",
              border: `2px solid ${theme.palette.info.light}`,
              height: "100%",
            }}
          >
            <AutoStoriesIcon
              sx={{
                color: theme.palette.info.main,
                fontSize: 40,
                mb: 1,
              }}
            />
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: theme.palette.info.main }}
            >
              {estatusEstudiante.actividades.nuevas}
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              NUEVAS
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Sección de módulos */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BookIcon
              sx={{ fontSize: 36, mr: 1, color: theme.palette.primary.main }}
            />
            <Typography variant="h5" fontWeight="bold">
              MÓDULOS DE CIENCIAS
            </Typography>
          </Box>

          <Button
            variant="text"
            color="primary"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            VER TODOS
          </Button>
        </Box>

        {/* Grid de módulos */}
        <Grid container spacing={3}>
          {modulos.map((modulo) => (
            <Grid item xs={12} sm={6} md={3} key={modulo.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: `3px solid ${modulo.borderColor}`,
                  height: "100%",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 8px 16px rgba(0,0,0,0.1)`,
                  },
                }}
              >
                <CardActionArea sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    {/* Parte superior con emoji y título */}
                    <Box
                      sx={{
                        bgcolor: modulo.color,
                        borderRadius: 3,
                        p: 2,
                        mb: 2,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="h3" sx={{ mb: 1 }}>
                        {modulo.emoji}
                      </Typography>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          textTransform: "uppercase",
                        }}
                      >
                        {modulo.titulo}
                      </Typography>
                    </Box>

                    {/* Información del módulo */}
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        {modulo.actividades} ACTIVIDADES
                      </Typography>

                      {/* Barra de progreso con contorno */}
                      <Box
                        sx={{
                          height: 16,
                          bgcolor: "rgba(0,0,0,0.05)",
                          borderRadius: 8,
                          mb: 1,
                          border: "1px solid rgba(0,0,0,0.1)",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            height: "100%",
                            width: `${modulo.progreso}%`,
                            bgcolor: modulo.borderColor,
                            borderRadius: 8,
                          }}
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{ color: modulo.borderColor }}
                      >
                        {modulo.progreso}% COMPLETADO
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Sección de actividades destacadas */}
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AutoStoriesIcon
              sx={{ fontSize: 36, mr: 1, color: theme.palette.secondary.main }}
            />
            <Typography variant="h5" fontWeight="bold">
              ACTIVIDADES DESTACADAS
            </Typography>
          </Box>

          <Button
            variant="text"
            color="secondary"
            sx={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            TODAS LAS ACTIVIDADES
          </Button>
        </Box>

        {/* Grid de actividades destacadas */}
        <Grid container spacing={3}>
          {actividadesDestacadas.map((actividad) => (
            <Grid item xs={12} md={6} key={actividad.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: `3px solid ${actividad.borderColor}`,
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 8px 16px rgba(0,0,0,0.1)`,
                  },
                }}
              >
                <CardActionArea>
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        bgcolor: actividad.color,
                        p: 2,
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h3" sx={{ mr: 2 }}>
                          {actividad.emoji}
                        </Typography>
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {actividad.modulo}
                          </Typography>
                          <Typography variant="h6" fontWeight="bold">
                            {actividad.titulo}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          bgcolor:
                            actividad.estado === "continuar"
                              ? "warning.main"
                              : "info.main",
                          color: "white",
                          px: 2,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: "bold",
                        }}
                      >
                        {actividad.estado === "continuar"
                          ? "CONTINUAR"
                          : "NUEVO"}
                      </Box>
                    </Box>

                    <Box sx={{ p: 2 }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          borderRadius: 3,
                          py: 1.5,
                          backgroundColor: actividad.borderColor,
                          "&:hover": {
                            backgroundColor: actividad.borderColor,
                            opacity: 0.9,
                          },
                          fontWeight: "bold",
                        }}
                      >
                        {actividad.estado === "continuar"
                          ? "CONTINUAR"
                          : "COMENZAR"}
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Sección de reconocimientos/logros */}
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 3,
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 36, mr: 1, color: "#FFB900" }} />
          <Typography variant="h5" fontWeight="bold">
            MIS LOGROS
          </Typography>
        </Box>

        {/* Tarjeta de logros con trofeos */}
        <Paper
          elevation={2}
          sx={{
            p: 3,
            borderRadius: 4,
            border: "2px dashed #FFB900",
            bgcolor: "#FFF8E1",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="text.secondary"
              sx={{ mb: 1 }}
            >
              ¡SIGUE APRENDIENDO PARA GANAR TROFEOS!
            </Typography>
            <Typography variant="body1">
              Completa actividades para conseguir estrellas y trofeos
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={4} sm={2}>
              <Box
                sx={{
                  textAlign: "center",
                  filter: "grayscale(1)",
                  opacity: 0.7,
                  transition: "all 0.3s",
                  "&:hover": {
                    filter: "grayscale(0)",
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 1 }}>
                  🏆
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  5 ACTIVIDADES
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Box
                sx={{
                  textAlign: "center",
                  filter: "grayscale(1)",
                  opacity: 0.7,
                  transition: "all 0.3s",
                  "&:hover": {
                    filter: "grayscale(0)",
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 1 }}>
                  🌟
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  10 ACTIVIDADES
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Box
                sx={{
                  textAlign: "center",
                  filter: "grayscale(1)",
                  opacity: 0.7,
                  transition: "all 0.3s",
                  "&:hover": {
                    filter: "grayscale(0)",
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 1 }}>
                  🎓
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  15 ACTIVIDADES
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} sm={2}>
              <Box
                sx={{
                  textAlign: "center",
                  filter: "grayscale(1)",
                  opacity: 0.7,
                  transition: "all 0.3s",
                  "&:hover": {
                    filter: "grayscale(0)",
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 1 }}>
                  🏅
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  TODOS LOS MÓDULOS
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} sm={2}>
              <Box
                sx={{
                  textAlign: "center",
                  filter: "grayscale(1)",
                  opacity: 0.7,
                  transition: "all 0.3s",
                  "&:hover": {
                    filter: "grayscale(0)",
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 1 }}>
                  🎖️
                </Typography>
                <Typography variant="body2" fontWeight="medium">
                  EXPERTO
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      {mostrarVideoSenas && (
  <Box
    sx={{
      position: "fixed",
      bottom: 16,
      right: 16,
      zIndex: 1300,
      width: 180,
      height: "auto",
      boxShadow: 4,
      borderRadius: 2,
      overflow: "hidden",
      backgroundColor: "#000",
    }}
  >
    <Box sx={{ position: "relative" }}>
      {/* Botón de cerrar */}
      <Button
        size="small"
        onClick={() => setMostrarVideoSenas(false)}
        sx={{
          minWidth: "unset",
          position: "absolute",
          top: 4,
          right: 4,
          zIndex: 1400,
          backgroundColor: "rgba(255,255,255,0.7)",
          color: "#000",
          fontWeight: "bold",
          lineHeight: 1,
          padding: "2px 6px",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,1)",
          },
        }}
      >
        ×
      </Button>

      <video
        src="/assets/senas/Hola.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  </Box>
)}

    </Container>
    
  );
};

export default HomeView;
