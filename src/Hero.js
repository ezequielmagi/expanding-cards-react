import React from 'react'
import './hero.css'

import img1 from './assets/img/img1.jpg'
import img2 from './assets/img/img2.jpg'
import img3 from './assets/img/img3.jpg'
import img4 from './assets/img/img4.jpg'
import img5 from './assets/img/img5.jpg'

export default function Hero() {

  const panels = document.querySelectorAll('.panel')
  
  panels.forEach( panel => {
    panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
    })
  } )

  const removeActiveClasses = () => {
    panels.forEach( panel => {
      panel.classList.remove('active')
    } )
  }

  return (
    <div className='container'>
      <div className="imgContainer">
        <div className="panel active" style={ { backgroundImage:`url(${img1})` } }><h3 className='text'>Avengers: Assemble</h3></div>
        <div className="panel" style={ { backgroundImage:`url(${img2})` } }><h3 className='text'>DR. Strange</h3></div>
        <div className="panel" style={ { backgroundImage:`url(${img3})` } }><h3 className='text'>Spiderman: No Way Home</h3></div>
        <div className="panel" style={ { backgroundImage:`url(${img4})` } }><h3 className='text'>Avengers: Secret Wars</h3></div>
        <div className="panel" style={ { backgroundImage:`url(${img5})` } }><h3 className='text'>New Avengers</h3></div>
      </div>
    </div>
  )
}
