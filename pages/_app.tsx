import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes/dark';
import Analytics from '../utils/Analytics';
import Menu from '../components/menu/Menu';
import { Grid, Container } from '@material-ui/core';

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

        return (
            <React.Fragment>
                <Head>
                    <title>@keindev</title>

                    <link rel="manifest" href="/manifest.json" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container maxWidth="xl" style={{ height: '100vh' }}>
                        <Menu />

                        <Grid container direction="column" justify="center" alignItems="center">
                            <Component {...pageProps} />
                        </Grid>
                    </Container>
                </ThemeProvider>
            </React.Fragment>
        );
    }
}
