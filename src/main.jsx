import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './pages/demo/App.jsx'
import Home from './Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> DEMO */}
    <Home />
  </React.StrictMode>,
)
