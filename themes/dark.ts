import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontSize: 14,
        fontFamily: ['"Lato"', 'sans-serif'].join(','),
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
            main: '#15202B',
            dark: '#334358',
            light: '#445469',
        },
        secondary: {
            main: '#253341',
            dark: '#8B8B8B'
        },
        background: {
            default: '#15202B',
        },
        text: {
            primary: '#eee',
            secondary: '#ddd',
        },
    },
    shadows: [
        'none',
        `-2px 4px 4px rgba(0, 0, 0, .32)`,
        '-2px 4px 4px rgba(0, 0, 0, .68)',
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
});

export default theme;
