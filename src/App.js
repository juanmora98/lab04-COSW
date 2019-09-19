import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login }  from './App/LoginComponent/login';
import { Listas } from './App/ListasComponent/listas';


function App() {
  return (
    <Router>
        <div className="App">          
          <Route exact path="/" component={LoginView}/>
          <Route path="/listas" component={ListasView}/>          
        </div>
      </Router>
  );
}


const LoginView = () => (
  <div>
    < Login/>
  </div>
);

const ListasView = () => (
  <div>
    <Listas />
  </div>
);

export default App;
