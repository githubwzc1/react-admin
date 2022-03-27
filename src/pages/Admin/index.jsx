import React, { Component } from 'react'
import {Link,Outlet} from 'react-router-dom'



export default class Admin extends Component {
  render() {
    return (
      <div>
          <Link to='/login'>去登陆</Link>
          <ul>
              <li><Link to='home'>home</Link></li>
              <li><Link to='category'>category</Link></li>
              <li><Link to='product'>product</Link></li>
              <li><Link to='user'>user</Link></li>
              <li><Link to='role'>role</Link></li>
              <li><Link to='chart'>chart</Link></li>
          </ul>

          <Outlet></Outlet>
      </div>
      
    )
  }
}
