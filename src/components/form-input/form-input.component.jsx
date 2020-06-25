import React from 'react'
import './form-input.styles.scss'

export default function FormInput(props) {
  const { handleChange, label, ...otherProps } = props

  return (
    <div className='group'>
      <input
        className='form-input'
        type='text'
        onChange={handleChange}
        {...otherProps}
      />

      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}>
          {label}
        </label>
      )}
    </div>
  )
}
