import { createMuiTheme } from '@material-ui/core/styles';

enum Colors {
    Black = '#15202B',
    DarkBlue = '#253341',
    Blue = '#334358',
    LightBlue = '#445469',
    Gray = '#8B8B8B',
    Cloud = '#ddd',
    White = '#eee',
}

enum Shadows {
    Light = '-2px 4px 4px rgba(0, 0, 0, .32)',
    Dark = '-2px 4px 4px rgba(0, 0, 0, .68)',
}

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        common: {
            black: Colors.Black,
            white: Colors.White,
        },
        primary: {
            light: Colors.DarkBlue,
            main: Colors.Black,
            dark: Colors.Black,
            contrastText: Colors.Cloud,
        },
        secondary: {
            light: Colors.LightBlue,
            main: Colors.Blue,
            dark: Colors.DarkBlue,
            contrastText: Colors.Cloud,
        },
        error: {
            light: Colors.LightBlue,
            main: Colors.LightBlue,
            dark: Colors.LightBlue,
            contrastText: Colors.Cloud,
        },
        text: {
            primary: Colors.Cloud,
            secondary: Colors.Cloud,
            disabled: Colors.Gray,
            hint: Colors.Gray,
        },
        background: {
            paper: Colors.DarkBlue,
            default: Colors.Black,
        },
    },
    typography: {
        fontFamily: '"Lato", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: '2.5rem',
            color: Colors.White,
        },
        h2: {
            fontWeight: 300,
            fontSize: '1.5rem',
        },
        h3: {
            fontWeight: 300,
            fontSize: '1.25rem',
        },
        h4: {
            fontWeight: 400,
            fontSize: '1rem',
        },
        h5: {
            fontWeight: 400,
            fontSize: '1rem',
        },
        h6: {
            fontWeight: 700,
            fontSize: '1rem',
        },
    },
    shadows: [
        'none',
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Light,
        Shadows.Dark,
    ],
    overrides: {
        MuiMenu: {
            paper: {
                borderRadius: 4,
                boxShadow: Shadows.Dark,
            },
            list: {
                borderRadius: 4,
            },
        },
    },
});

export default theme;
