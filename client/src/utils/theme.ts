import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(248 250 252)',
    },
    primary: {
      main: '#38bdf8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#6b7280',
      contrastText: '#fff',
    },
    info: {
      main: '#8b5cf6',
      contrastText: '#fff',
    },
    success: {
      main: '#4ade80',
      contrastText: '#111827',
    },
    warning: {
      main: '#fcd34d',
      contrastText: '#111827',
    },
    error: {
      main: '#ef4444',
      contrastText: '#111827',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: ['Inter'].join(','),
  },
})

export default theme
