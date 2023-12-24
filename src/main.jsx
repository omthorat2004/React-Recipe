import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Context from './Context/Context.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <App />
    </Context>
  </React.StrictMode>,
)
