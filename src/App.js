import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';
import Search from './components/Search';

class App extends Component{
  render(){
  return (
    <Router>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/playMovie/:id' element={<Play/>}/>
        <Route exact path='/search/:q'  element={<Search/>} />
      </Routes>
    </Router>
  );
  }
}

export default App;
