import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up'
import Header from './components/header/header.component'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  )
}

export default App
