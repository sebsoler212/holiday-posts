// src/pages/_app.tsx
import '../styles/globals.css'
import '@uploadcare/react-uploader/core.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../components/ThemeProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
