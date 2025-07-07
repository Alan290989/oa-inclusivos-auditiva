import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Badge,
  Paper
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ClassIcon from "@mui/icons-material/Class";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function NavBar({ activeTab, onTabChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Menú actualizado con emojis y colores más vibrantes
  const menuItems = [
    { 
      label: "Principal", 
      icon: <HomeIcon />, 
      emoji: "🏠", 
      path: "/",
      color: '#BBDEFB' // Color azul suave como uno de los módulos
    },
    { 
      label: "Actividades", 
      icon: <AutoStoriesIcon />, 
      emoji: "📚", 
      path: "/activities",
      color: '#FFCDD2' // Color rosado suave como uno de los módulos
    },
    { 
      label: "Clases", 
      icon: <ClassIcon />, 
      emoji: "🎓", 
      path: "/classes",
      color: '#C8E6C9' // Color verde suave como uno de los módulos
    },
    { 
      label: "Logros", 
      icon: <EmojiEventsIcon />, 
      emoji: "🏆", 
      path: "/achievements",
      color: '#FFF8E1' // Color amarillo suave de la sección de logros
    },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={3}
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        borderRadius: {xs: 0, md: "0 0 16px 16px"},
        mb: 2
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo con estilo infantil */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Paper
            elevation={2}
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 2,
              py: 0.5,
              borderRadius: 3,
              bgcolor: 'white',
              border: '2px solid rgba(255,255,255,0.8)',
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: "bold", 
                color: theme.palette.primary.main,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              CIENCIAS
              <Badge 
                badgeContent="OA" 
                color="secondary" 
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.6rem",
                    height: 16,
                    fontWeight: "bold",
                  }
                }}
              >
                MI
              </Badge>
            </Typography>
            <Typography variant="h5" sx={{ ml: 1 }}>🔬</Typography>
          </Paper>
        </Box>

        {/* Menú horizontal (visible en desktop) con estilos más coloridos */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {menuItems.map(({ label, emoji}) => (
              <Button
                key={label}
                onClick={() => onTabChange(label)}
                sx={{
                  textTransform: "none",
                  fontSize: "1rem",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: activeTab === label ? 700 : 500,
                  mx: 1.5,
                  py: 1.5,
                  borderRadius: 3,
                  px: 2,
                  backgroundColor: activeTab === label ? 'rgba(255,255,255,0.15)' : 'transparent',
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.25)",
                  },
                  position: "relative",
                  transition: "all 0.3s",
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="h6">{emoji}</Typography>
                  {label.toUpperCase()}
                </Box>
              </Button>
            ))}
          </Box>
        )}

        {/* Solo icono de menú responsive */}
        <Box>
          {isMobile && (
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Menú lateral para móvil con estilos infantiles */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
            borderRadius: "12px 0 0 12px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "auto",
            background: `linear-gradient(180deg, ${theme.palette.primary.light}40, white)`,
          }}
        >
          {/* Barra de título con botón de cerrar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" color="white" fontWeight="bold">
                MI MENÚ
              </Typography>
              <Typography variant="h5">📚</Typography>
            </Box>
            <IconButton onClick={handleClose} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* Lista de opciones del menú - removidos los iconos de color morado */}
          <List sx={{ p: 2 }}>
            {menuItems.map(({ label, emoji, color }) => (
              <ListItem
                key={label}
                button
                selected={activeTab === label}
                onClick={() => {
                  onTabChange(label);
                  handleClose();
                }}
                sx={{
                  justifyContent: "flex-start",
                  my: 1,
                  borderRadius: 3,
                  pl: 2,
                  color: theme.palette.primary.main,
                  bgcolor: activeTab === label ? color : "transparent",
                  fontWeight: activeTab === label ? 600 : 400,
                  border: activeTab === label ? `2px solid ${theme.palette.primary.main}` : `2px solid transparent`,
                  "&:hover": {
                    backgroundColor: `${color}`,
                  },
                  transition: "all 0.3s",
                }}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body1">{emoji}</Typography>
                      <Typography variant="body1" fontWeight={activeTab === label ? 600 : 400}>
                        {label}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
          
          {/* Sección de puntos */}
          <Box sx={{ p: 2, mt: 'auto' }}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                borderRadius: 3,
                bgcolor: '#FFF8E1',
                border: '2px dashed #FFB900',
                textAlign: 'center'
              }}
            >
              <Typography variant="h5" sx={{ mb: 1 }}>🌟</Typography>
              <Typography variant="h6" fontWeight="bold" color="#FFB900">
                120 PUNTOS
              </Typography>
              <Typography variant="body2">
                ¡Sigue aprendiendo!
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}