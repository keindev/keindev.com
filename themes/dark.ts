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
    typography: {
        fontSize: 14,
        fontFamily: '"Lato", sans-serif',
        h1: {
            fontWeight: 700,
            fontSize: 40,
        },
        h2: {
            fontWeight: 300,
            fontSize: 24,
        },
    },
    palette: {
        primary: {
            main: Colors.Black,
            dark: Colors.Blue,
            light: Colors.LightBlue,
        },
        secondary: {
            main: Colors.DarkBlue,
        },
        text: {
            primary: Colors.White,
            secondary: Colors.Cloud,
        },
        background: {
            default: Colors.Black,
        },
    },
    shadows: [
        'none',
        Shadows.Light,
        Shadows.Dark,
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
        'none',
    ],
    overrides: {
        MuiMenu: {
            paper: {
                borderRadius: 4,
                backgroundColor: Colors.DarkBlue,
                boxShadow: Shadows.Dark,
            },
            list: {
                borderRadius: 4,
                backgroundColor: Colors.DarkBlue,
                color: Colors.Cloud,
            },
        },
    },
});

export default theme;
