import React,{Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Play from './components/Play';
import Search from './components/Search';
import Show from './components/Show';
import Episodes from './components/Episodes';
import PlayShow from './components/PlayShow';
class App extends Component{
  render(){
  return (
    <Router>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route exact path='/playMovie/:id' element={<Play/>}/>
        <Route exact path='/search/:q'  element={<Search/>} />
        <Route exact path='/show/:id'  element={<Show/>} />
        <Route exact path='/episodes/:id/:s' element={<Episodes/>} />
        <Route exact path='/playShow/:id/:s/:ep' element={<PlayShow/>} />
      </Routes>
    </Router>
  );
  }
}

export default App;
