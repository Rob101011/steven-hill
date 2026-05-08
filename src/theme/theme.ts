import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0d0d0d',
      paper: '#1a1a1a',
    },
    primary: {
      main: '#4a90a4',
      light: '#5ba3b8',
    },
    secondary: {
      main: '#b0b8c1',
    },
    text: {
      primary: '#f0f0f0',
      secondary: '#9e9e9e',
    },
    divider: '#333333',
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    h1: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Roboto Slab', serif",
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&.MuiButton-containedPrimary': {
            backgroundColor: '#4a90a4',
            '&:hover': {
              backgroundColor: '#5ba3b8',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          border: '1px solid #333333',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d0d0d',
          borderBottom: '1px solid #333333',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;

