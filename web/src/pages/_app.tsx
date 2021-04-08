import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme'

function MyApp({Component, pageProps}: any) {
  return (
      <ThemeProvider theme={theme}>
        <CSSReset/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp;
