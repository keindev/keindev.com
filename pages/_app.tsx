import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../themes/dark';
import Menu from '../components/Menu';
import Analytics from '../utils/Analytics';

export default class Application extends App {
    componentDidMount(): void {
        Analytics.init();
        Analytics.view();

        if (Router.router) {
            Router.router.events.on('routeChangeComplete', Analytics.view);
        }

        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentElement?.removeChild(jssStyles);
        }
    }

    render(): React.ReactElement {
        const { Component, pageProps } = this.props;
        const menuHeight = 90;

        return (
            <>
                <Head>
                    <title>Daniil Ryazanov</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container maxWidth="xl" style={{ height: '100vh' }}>
                        <Box height={menuHeight}>
                            <Menu />
                        </Box>

                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{ height: `calc(100% - ${menuHeight}px)`, flexWrap: 'nowrap' }}
                        >
                            <Component {...pageProps} />
                        </Grid>
                    </Container>
                </ThemeProvider>
            </>
        );
    }
}
