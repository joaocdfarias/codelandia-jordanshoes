import React from 'react'

import HeroImg from '../../../public/assets/hero-img.png'
import HeroImgMobile from '../../../public/assets/hero-img-mobile.png'

import './Hero.css'

export const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          window.innerWidth >= 480
            ? `url(${HeroImg})`
            : `url(${HeroImgMobile})`,
      }}
    >
      <div className="container">
        <div className="text">
          <h1>A melhor loja de Jordan</h1>
          <p>
            O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e
            o jogador Michael Jordan.
          </p>
        </div>
      </div>
    </section>
  )
}
