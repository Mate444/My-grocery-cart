import React, { Component } from 'react';
import GroceryItems from './components/GroceryItems.js';
import  History  from './components/History.js';
import GroceryCart from './components/GroceryCart.js';
import './App.css';

export default class App extends Component{
 
  render(){
    return <div id= "app-container">
        <h1>Grocery Cart</h1>
        <History />
        <div id= "grocery-container">
              <GroceryItems />
              <GroceryCart />
        </div>
    </div>
  }
}