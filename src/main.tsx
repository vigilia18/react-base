import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { themeStored } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={themeStored}>
    <App />
  </Provider>
  
)
