import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='es'>
                <Head>
                    <meta name="author" content="Agencia Rebels 247" />

                    <meta name="description" content="Posiciono a marcas mediante la creación de contenido audiovisual. FOTOGRAFÍA · EDICIÓN · VIDEO" />
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                        rel="stylesheet"
                    />
                    <link rel="preload" href="/fonts/subset-AkiraExpanded-SuperBold.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/subset-BebasKai.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/subset-CabifyCircular-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/subset-CabifyCircular-Book.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/subset-CabifyCircular-Light.woff2" as="font" type="font/woff2" crossOrigin="" />
                    <link rel="preload" href="/fonts/subset-Cocogoose.woff2" as="font" type="font/woff2" crossOrigin="" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument