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

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/users">
            </Route>
          </Switch>
        </Container>
      </Router>
    </div >
  )
}

export default App
