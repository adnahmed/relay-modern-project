import './index.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import reportWebVitals from './reportWebVitals'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import App from './pages/App/App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RelayEnvironmentProvider } from 'relay-hooks'
import modernEnvironment from './RelayEnvironment'
import colors from './Style/colors.json'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}
const container = document.getElementById('root') as HTMLElement
const theme = extendTheme({ colors, config })
const root = createRoot(container!)
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <RelayEnvironmentProvider environment={modernEnvironment}>
          <App />
        </RelayEnvironmentProvider>
      </ChakraProvider>
    </CookiesProvider>
  </BrowserRouter>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
