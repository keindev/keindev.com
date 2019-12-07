import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#15202B',
        },
        secondary: {
            main: '#ddd',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#15202B',
        },
    },
});

export default theme;
