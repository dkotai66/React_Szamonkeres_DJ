import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Tapasztalat from './components/Tapasztalat';
import Idopontfoglalas from './components/Idopontfoglalas';

export default class App extends Component {
  render() {
    return <div>
      <main>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/tapasztalat' element={<Tapasztalat />}></Route>
          <Route path='/idopont' element={<Idopontfoglalas />}></Route>
        </Routes>
      </main>
    </div>
  }
}
