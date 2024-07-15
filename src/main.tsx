import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext.tsx'

render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('app')!
)
