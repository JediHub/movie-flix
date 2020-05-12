import React, { useState } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/hompage/homepage.component';
import Header from './components/header/header.component';

const App = () => {

  const [searchText, setSearchText] = useState('');
  const [searchItem, setSearchItem] = useState('');

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setSearchText(value);
  }

  const onClickSearchIcon = () => {
    console.log('click Search Icon');
    setSearchItem(searchText);
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Header onChangeHandler={onChangeHandler} searchText={searchText} onSearchHandler= {onClickSearchIcon}/>
        <Switch>
          <Route exact path='/' component={() => (<HomePage searchText={searchItem} />)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

