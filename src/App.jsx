import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.less'
import router  from './assets/js/router';


export default class App extends Component {

  renderRoute(router){
    if(router){
      return (
        router.map((item)=>{
          return <Route {...item}  key={item.path}>{this.renderRoute(item.children)}</Route>
        })
      )
    }
  }

  render() {
    return (
      <div>
        <Routes>{this.renderRoute(router)}</Routes>
      </div>
    )
  }
}

