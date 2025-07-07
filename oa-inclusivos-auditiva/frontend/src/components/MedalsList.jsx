import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const MedalsList = ({ medallas }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2}>
      {medallas.map((medalla) => (
        <Grid item xs={6} sm={4} md={2} key={medalla.nivel}>
          <Paper
            elevation={2}
            sx={{
              p: 2,
              borderRadius: 3,
              textAlign: "center",
              height: "100%",
              border: medalla.desbloqueada
                ? `3px solid #FFD700`
                : `3px solid #e0e0e0`,
              backgroundColor: medalla.desbloqueada
                ? "rgba(255, 215, 0, 0.05)"
                : "rgba(0, 0, 0, 0.05)",
              position: "relative",
              opacity: medalla.desbloqueada ? 1 : 0.7,
            }}
          >
            <Avatar
              sx={{
                width: 60,
                height: 60,
                margin: "0 auto 12px auto",
                backgroundColor: medalla.desbloqueada ? "#FFF8E1" : "#f5f5f5",
                border: medalla.desbloqueada
                  ? "3px solid #FFD700"
                  : "3px solid #e0e0e0",
                fontSize: "2rem",
              }}
            >
              {medalla.emoji}
            </Avatar>

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {medalla.nombre}
            </Typography>

            <Typography
              variant="body2"
              color={medalla.desbloqueada ? "text.primary" : "text.secondary"}
            >
              Nivel {medalla.nivel}
            </Typography>

            {!medalla.desbloqueada && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: 2,
                    fontWeight: "bold",
                  }}
                >
                  BLOQUEADO
                </Typography>
              </Box>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default MedalsList;
