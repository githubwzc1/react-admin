import React, { Component } from 'react'
import {Link,Outlet} from 'react-router-dom'

export default class Chart extends Component {
  render() {
    return (
      <div>
          <ul>
              <li><Link to='bar'>柱状图</Link> </li>
              <li><Link to='pie'>饼状图</Link></li>
              <li><Link to='line'>线状图</Link></li>
          </ul>
          <Outlet></Outlet>
      </div>
    )
  }
}
