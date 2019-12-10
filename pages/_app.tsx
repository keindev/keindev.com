import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes/dark';
import Analytics from '../utils/Analytics';
import Menu from '../components/Menu';
import { Container, Box, Grid } from '@material-ui/core';

export default class MyApp extends App {
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

        return (
            <React.Fragment>
                <Head>
                    <title>@keindev 🤔</title>

                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Menu />
                    <Container maxWidth="lg">
                        <Box marginTop={12}>
                            <Grid container direction="column" justify="center" alignItems="stretch">
                                <Component {...pageProps} />
                            </Grid>
                        </Box>
                    </Container>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}
