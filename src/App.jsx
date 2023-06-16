import { useState } from 'react'
import './App.css'
import Header from './header'
import Body from './body'
import vedio from './assets/vedio.mp4'

function App() {
  

  return (
    
    <div>
      <video className='videoTag' autoPlay loop muted>
        <source src={vedio} type='video/mp4' />
       </video>
      <Header />
      <Body />

        
    </div>
  )
}

export default App
