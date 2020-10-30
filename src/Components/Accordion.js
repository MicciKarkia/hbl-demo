import React, { useState, useRef } from 'react'
import Chevron from './Chevron'

import './Accordion.css'

const Accordion = (props) => {
    const [setActive, setActiveState] = useState('')
    const [setHeight, setHeightState] = useState('0px')
    const [setRotate, setRotateState] = useState('accordion__icon')

    const content = useRef(null)

    console.log('setActive is:', setActive)
    console.log('content: ', content)

    const addContent = () => {
        return props.content.map((item, index) =>
        <div
          key={index}
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: item}}
        >
        </div>
        )
    }

    const toggleAccordion = () => {
      setActiveState(setActive === '' ? 'active' : '')
      setHeightState(
        setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
      )
      setRotateState(
        setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate' 
      )
    }

    return (
        <div className="accordion__section">
          <h5 className="accordion__headline" dangerouslySetInnerHTML={{ __html: props.headline }}></h5>
          <h3 className="accordion__title" dangerouslySetInnerHTML={{ __html: props.title }}></h3>
          <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__button">{setActive === 'active' ? 'Stäng' : 'Vik ut'}</p>
            <Chevron 
              className={`${setRotate}`}
              width={10} 
              fill={"#777"} 
            />
          </button>
          <div 
            ref={content}
            style={{ maxHeight: `${setHeight}` }}
            className="accordion__content"
          >
            {addContent()}
          </div>
        </div>
    )
}

export default Accordion