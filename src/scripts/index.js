import 'regenerator-runtime'
import '../styles/style.css'
import '../scripts/views/components/footer'
import '../scripts/views/components/slider'
import '../scripts/routes/url-parser'
import '../scripts/routes/routes'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
