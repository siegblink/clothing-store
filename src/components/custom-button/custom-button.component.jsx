import React from 'react'
import './custom-button.styles.scss'

export default function CustomButton(props) {
  const { children, isGoogleSignIn, ...otherProps } = props

  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
