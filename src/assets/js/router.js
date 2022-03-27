import { Navigate } from 'react-router-dom'
import Login from '../../pages/Login'
import Admin from '../../pages/Admin'
import Home from '../../pages/Home'
import Category from '../../pages/Category'
import Product from '../../pages/Product'
import User from '../../pages/User'
import Role from '../../pages/Role'
import Chart from '../../pages/Chart'
import Detail from '../../pages/Product/Detail'
import SaveUpdate from '../../pages/Product/SaveUpdate'
import Line from '../../pages/Chart/Line'
import Pie from '../../pages/Chart/Pie'
import Bar from '../../pages/Chart/Bar'

const router = [
    {path:'/login',element:<Login/>},
    {path:'/admin',element:<Admin/>,children:[
        {path:'home',element:<Home/>},
        {path:'category',element:<Category/>},
        {path:'product',element:<Product/>, children:[
            {path:'detail',element:<Detail/>},
            {path:'saveupdate',element:<SaveUpdate/>},
        ]},
        {path:'user',element:<User/>},
        {path:'role',element:<Role/>},
        {path:'chart',element:<Chart/>,children:[
            {path:'line',element:<Line/>},
            {path:'pie',element:<Pie/>},
            {path:'bar',element:<Bar/>},
        ]},
        {path:'',element:<Navigate to='home'/>},
    ]},
    {path:'/',element:<Navigate to='/admin' />},

]
export default router

//   <Route path='/login' element={<Login/>}></Route>
//   <Route path='/admin' element={<Admin/>}>
//     <Route path='home' element={<Home/>}></Route>
//     <Route path='category' element={<Category/>}></Route>
//     <Route path='product' element={<Product/>}>
//       <Route path='detail' element={<Detail/>}></Route>
//       <Route path='saveupdate' element={<SaveUpdate/>}></Route>
//     </Route>
//     <Route path='user' element={<User/>}></Route>
//     <Route path='role' element={<Role/>}></Route>
//     <Route path='chart' element={<Chart/>}>
//       <Route path='line' element={<Line/>}></Route>
//       <Route path='pie' element={<Pie/>}></Route>
//       <Route path='Bar' element={<Bar/>}></Route>
//     </Route>
//     <Route path='' element={<Navigate to='home'/>}></Route>
//   </Route>
//   <Route path='/' element={<Navigate to='/admin' />}></Route>