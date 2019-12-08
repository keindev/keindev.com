import * as React from 'react';
import Document, { Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { StylesProviderProps } from '@material-ui/styles';
import theme from '../themes/dark';

export default class MyDocument extends Document {
    render(): React.ReactElement {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />

                    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
            enhanceApp: App => (props): React.ReactElement<StylesProviderProps> => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};
