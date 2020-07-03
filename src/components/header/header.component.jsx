import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'

export default function Header(props) {
  const { currentUser } = props

  function signOut() {
    auth.signOut()
  }

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>

      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        <Link className='option' to='/signin'>
          {currentUser ? (
            <div className='option' onClick={signOut}>
              SIGN OUT
            </div>
          ) : (
            <div className='option' to='/signin'>
              SIGN IN
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}
