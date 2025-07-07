import React from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const UpcomingChallenges = ({ desafios }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={3}>
      {desafios.map((desafio, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 4,
              height: "100%",
              background: `linear-gradient(135deg, #673AB7, #9575CD)`,
              position: "relative",
              overflow: "hidden",
              border: "3px solid #673AB7",
              color: "white",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            {/* Círculo decorativo */}
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
                top: "-50px",
                right: "-50px",
              }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "3rem",
                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {desafio.emoji}
                </Typography>

                <Chip
                  icon={<StarIcon sx={{ color: "#FFD700 !important" }} />}
                  label={`${desafio.puntos} pts`}
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "white",
                    "& .MuiChip-label": { px: 1 },
                  }}
                />
              </Box>

              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{
                  mb: 2,
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                {desafio.titulo}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  opacity: 0.9,
                  height: "40px",
                }}
              >
                {desafio.descripcion}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <Chip
                  icon={<ArrowForwardIcon />}
                  label="COMENZAR DESAFÍO"
                  clickable
                  sx={{
                    p: 0.5,
                    fontWeight: "bold",
                    backgroundColor: "white",
                    color: "#673AB7",
                    "& .MuiChip-label": { px: 1.5 },
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                    },
                  }}
                />
              </Box>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default UpcomingChallenges;
