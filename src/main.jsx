import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import PopUp from './components/PopUp/PopUp.jsx'
import Header from './components/Header/Header.jsx'
import WithoutStatus from './components/WithoutStatus/WithoutStatus.jsx'

ReactDOM.createRoot(document.getElementById('wrapper')).render(
  <React.StrictMode>
    <PopUp />
		<Header />
		<WithoutStatus />
  </React.StrictMode>,
)
