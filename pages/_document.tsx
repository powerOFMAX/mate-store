import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        {/* favicon */}
        {/* webfont */}
        {/* stylessheet */}
        {/* script */}
        <body className="ejemplo">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
