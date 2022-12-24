import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Index';
import Board from './Board';
import Article from './Article';

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />}>
            <Route path="board" element={<Board/>} />
            <Route path="article" element={<Article/>} />  
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
