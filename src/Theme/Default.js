import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 450,
            sm: 900,
            smCustom: 1020,
            md: 1200,
            lg: 1536,
            xl: 1920,
        },
    },

    palette: {
        primary: {
            main: '#8d4a3c',
            contrastText: '#fff',
        },
        secondary: {
            main: '#60A626',
            contrastText: '#fff',
        },
        error: {
            main: '#D7413E',
            contrastText: '#fff',
        },
        success: {
            main: '#4caf50',
            contrastText: '#fff',
        },
        warning: {
            main: '#ff9800',
            contrastText: '#1C1B1F',
        },
        info: {
            main: '#2979FF',
            contrastText: '#fff',
        },
        white: {
            main: '#fff',
            contrastText: '#49454F',
        },
        grey: {
            100: '#F9F9F9',
            200: '#CAC4D0',
            600: '#79747E',
            700: '#49454F',
            900: '#1C1B1F',
        },
        disabled: {
            main: '#CAC4D0',
        },
        colors: {
            branding: { primary: '#60A626' },
        },
    },
});

export default theme;
