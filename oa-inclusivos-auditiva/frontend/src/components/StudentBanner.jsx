import React from "react";
import {
  Paper,
  Grid,
  Box,
  Typography,
  LinearProgress,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";

const StudentBanner = ({ estudiante, medallas }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 4,
        background: `linear-gradient(135deg, #FFD54F, #FFA000)`,
        position: "relative",
        overflow: "hidden",
        border: "4px solid #FFD54F",
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
        <Grid item xs={12} md={7}>
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img
                src="/api/placeholder/40/40"
                alt="Seña para Logros"
                style={{
                  marginRight: "12px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "4px",
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  mr: 2,
                }}
              >
                MIS LOGROS
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  mb: 1,
                  opacity: 0.9,
                }}
              >
                Nivel {estudiante.nivelActual}:{" "}
                {medallas[estudiante.nivelActual - 1].nombre}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Box sx={{ flexGrow: 1, mr: 2 }}>
                  <LinearProgress
                    variant="determinate"
                    value={estudiante.progresoNivel}
                    sx={{
                      height: 15,
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.3)",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "white",
                      },
                    }}
                  />
                </Box>
                <Typography
                  variant="body1"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {estudiante.progresoNivel}%
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ color: "white" }}>
                {estudiante.puntos} / {estudiante.puntosSiguienteNivel} puntos
                para Nivel {estudiante.siguienteNivel}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Chip
                icon={<StarIcon sx={{ color: "#FFD700 !important" }} />}
                label={`${estudiante.puntos} PUNTOS TOTALES`}
                sx={{
                  backgroundColor: "white",
                  fontWeight: "bold",
                  p: 0.5,
                  "& .MuiChip-label": { px: 1.5, py: 0.75 },
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar
              sx={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                border: "4px solid rgba(255,255,255,0.5)",
                mb: 2,
                fontSize: "3rem",
              }}
            >
              {medallas[estudiante.nivelActual - 1].emoji}
            </Avatar>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                mb: 1,
                textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              ¡FELICIDADES {estudiante.nombre}! {estudiante.emoji}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                textAlign: "center",
              }}
            >
              ¡Sigue completando actividades para desbloquear más logros!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StudentBanner;
