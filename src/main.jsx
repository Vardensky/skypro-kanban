import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import PopUp from './components/PopUp/PopUp.jsx'
import Header from './components/Header/Header.jsx'
import MainContent from './components/MainContent/MainContent.jsx'

ReactDOM.createRoot(document.getElementById('wrapper')).render(
  <React.StrictMode>
    <PopUp />
		<Header />
		<MainContent />
		
  </React.StrictMode>,
)
