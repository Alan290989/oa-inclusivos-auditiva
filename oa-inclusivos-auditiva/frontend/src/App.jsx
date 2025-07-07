import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { CssBaseline, Box, Container, ThemeProvider, createTheme } from '@mui/material';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import ActivityView from './views/ActivityView';
import ClassesView from './views/ClassesView';
import AchievementsView from './views/AchievementsView';
import ClaseView from './views/ClaseView';
import CicloVidaView from './views/CicloVidaView';
import AnimalesView from './views/AnimalesView';
import PlantasView from './views/PlantasView';


// Tema personalizado para toda la aplicación
const theme = createTheme({
  palette: {
    primary: {
      main: '#6750a4',
    },
    secondary: {
      main: '#FFB74D',
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

// Componente principal con navegación
function AppContent() {
  const [activeTab, setActiveTab] = useState('Principal');
  const navigate = useNavigate();
  const location = useLocation();

  // Actualizar pestaña activa según la ruta
  useEffect(() => {
    const path = location.pathname;
    if (path === '/' || path === '/principal') {
      setActiveTab('Principal');
    } else if (path === '/actividades') {
      setActiveTab('Actividades');
    } else if (path === '/clases' || path.startsWith('/clase/')) {
      setActiveTab('Clases');
    } else if (path === '/logros') {
      setActiveTab('Logros');
    }
  }, [location.pathname]);

  // Navegación desde NavBar
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Principal':
        navigate('/principal');
        break;
      case 'Actividades':
        navigate('/actividades');
        break;
      case 'Clases':
        navigate('/clases');
        break;
      case 'Logros':
        navigate('/logros');
        break;
      default:
        navigate('/principal');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Ciclo de Vida View se renderiza sin Container para usar el ancho total */}
      {location.pathname === '/clase/ciclo-vida' ? (
        <Routes>
          <Route path="/clase/ciclo-vida" element={<CicloVidaView />} />
        </Routes>
      ) : (
        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 3, px: { xs: 2, sm: 3 } }}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/principal" element={<HomeView />} />
            <Route path="/actividades" element={<ActivityView />} />
            <Route path="/clases" element={<ClassesView />} />
            <Route path="/clase/:id" element={<ClaseView />} />
            <Route path="/logros" element={<AchievementsView />} />
              <Route path="/clase/animales" element={<AnimalesView />} />
                <Route path="/clase/plantas" element={<PlantasView />} />
          </Routes>
        </Container>
      )}
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
