import React from "react";
import { Box, Tabs, Tab, useTheme } from '@mui/material';
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TabsBar = ({ value, onChange }) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        mb: 4,
        mx: 'auto',
        maxWidth: 500,
        bgcolor: 'rgba(0,0,0,0.03)',
        borderRadius: 8,
        p: 1
      }}
    >
      <Tabs
        value={value}
        onChange={onChange}
        aria-label="activity tabs"
        variant="fullWidth"
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: theme.palette.secondary.main,
            height: 4,
            borderRadius: '4px 4px 0 0',
          },
          "& .MuiTab-root": {
            textTransform: "uppercase",
            fontSize: "1rem",
            fontWeight: "bold",
            minHeight: 60,
            borderRadius: 6,
            transition: 'all 0.3s ease',
            "&.Mui-selected": {
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            },
            "&:hover": {
              backgroundColor: theme.palette.background.paper,
              opacity: 0.9,
            },
          },
        }}
      >
        <Tab
          label="Por hacer"
          icon={<PlayCircleFilledIcon sx={{ fontSize: 28 }} />}
          iconPosition="top"
          sx={{
            color: value === 0 ? theme.palette.primary.main : "text.secondary",
            fontWeight: value === 0 ? 600 : 400,
            mr: 1
          }}
        />
        <Tab
          label="Completado"
          icon={<CheckCircleIcon sx={{ fontSize: 28 }} />}
          iconPosition="top"
          sx={{
            color: value === 1 ? theme.palette.primary.main : "text.secondary",
            fontWeight: value === 1 ? 600 : 400,
          }}
        />
      </Tabs>
    </Box>
  );
};

export default TabsBar;