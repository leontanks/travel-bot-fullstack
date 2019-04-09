import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Customers from './components/Customer/customers'
import Shoppings from './components/Shopping/shoppings'
import MainArea from './components/MainArea'

class App extends Component {

  render () {
    console.log(this.props);
    return (
      <Provider store={ store }>
        <div className="App">
          {/* <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">React/Redux Express Starter</h1>
          </header> */}
          {/* <Customers/>
          <Shoppings /> */}
          
          <MainArea />
        </div>
      </Provider>
    )
  }
}

export default App
