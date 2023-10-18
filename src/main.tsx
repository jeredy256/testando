import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import './index.css'
import { Rotas } from './Components/Routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Rotas />
  </Router>
)
