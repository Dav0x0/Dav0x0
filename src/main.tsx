import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react';
import ThemeProvider from './components/providers/ThemeProvider.tsx';

declare module 'react' {
    type CssVariable = `--${string}`
    interface CSSProperties {
        [key: CssVariable]: string | number
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
