import React from 'react'

import diceIcon from './images/icon-dice.svg'
import desktopDivider from './images/pattern-divider-desktop.svg'
import mobileDivider from './images/pattern-divider-mobile.svg'

const AdviceCard = ({ advice }) => {

  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <section className="advice__card">
      <h1 className='advice__number' >Advice #{advice.id}</h1>
      <p className='advice__text' >"{ advice.advice }"</p>
      <picture className='advice__border' >
        <source media="(max-width: 500px)" srcset={mobileDivider} />
        <img src={desktopDivider} alt="" />
      </picture>
      <button className='advice__button' onClick={reloadPage}>
        <img src={diceIcon} alt="" />
      </button>
    </section>
  )
}

export default AdviceCard