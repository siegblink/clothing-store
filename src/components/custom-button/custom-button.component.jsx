import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton(props) {
  const { children, ...otherProps } = props

  return (
    <button className='custom-button' {...otherProps}>
      {children}
    </button>
  )
}
