import '@fontsource/poppins'

import { Header } from '@/components/Header'
import { theme } from '@/lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import '../styles/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
