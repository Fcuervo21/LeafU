import { createTheme } from "@mui/material/styles";

const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#20AB89',
      dark: '#098B53',
      contrastText: '#F4F9F3',
      light: '#62D2A2',
    },
    secondary: {
      main: '#A1E41A',
      contrastText: '#474747',
      dark: '#96d41c',
    },
    divider: '#a1e41a',
    background: {
      default: '#F4F9F3',
    },
    error: {
      main: '#de4725',
    },
  },
});

export default theme;