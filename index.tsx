import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Phonebook, Contact, About } from './components'
import './styles.css'
import { Provider } from 'react-redux';
import { store } from './redux/store'

const temp_props = "Brandon's Phonebook"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
		{/* End new content */}
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/phonebook'>
          <Phonebook></Phonebook>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>


      </Switch>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);