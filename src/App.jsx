import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart'
import { CartProvider } from './contexts/cartContext'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Checkout from './pages/Checkout';


function App() {
  return (
    <div>
      <CartProvider>
        <Router>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/login">
                <Signin />
              </Route>
              <Route path="/checkout">
                <Checkout />
              </Route>
              <Route path="/orders/:code">
                <Checkout />
              </Route>
            </Switch>
          </Container>
        </Router>
      </CartProvider>
    </div >
  )
}

export default App
