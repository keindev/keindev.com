import * as React from 'react';
import NextDocument, { Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { StylesProviderProps } from '@material-ui/styles';

export default class Document extends NextDocument {
    render(): React.ReactElement {
        return (
            <html lang="en">
                <Head>
                    <title>Daniil Ryazanov</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    <link rel="manifest" href="/manifest.json" />
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

Document.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
            enhanceApp: App => (props): React.ReactElement<StylesProviderProps> => sheets.collect(<App {...props} />),
        });

    const initialProps = await NextDocument.getInitialProps(ctx);

    return { ...initialProps, styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()] };
};
