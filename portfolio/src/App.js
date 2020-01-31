import React from 'react'
import './App.css'

import Navbar from './navbar'
import SideBar from './sideBar'
import Routes from './routes'
import Scroll from './scroll'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideBar/>
      <Routes/>
      <Scroll />
    </div>

  );
}

export default App
