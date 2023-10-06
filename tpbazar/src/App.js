import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './component/admin/users/Users';
import Dashboard from './component/admin/dashboard/Dashboard';
import Home from './component/admin/dashboard/Home';
import Role from './component/admin/roles/Roles';
import Category from './component/admin/category/Category';
import SubCategory from './component/admin/category/SubCategory';
import Retailer from './component/admin/Retailer/Retailer';
import Offers from './component/admin/offers/Offers';
import Others from './component/admin/others/Others';
import Customers from './component/admin/customer/Customers';
import Update from './component/admin/offers/Update';
import Addusers from './component/admin/users/Addusers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route path='/admin/users' element={<Users />}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin/roles' element={<Role/>}/>
            <Route path='/admin/category' element={<Category/>}/>
            <Route path='/admin/subcategory' element={<SubCategory/>}/>
            <Route path='/admin/retailer' element={<Retailer/>}/>
            <Route path='/admin/offers' element={<Offers/>}/>
            <Route path='/adimn/others' element={<Others/>}/>
            <Route path='/admin/customers' element={<Customers/>}/>
            <Route path='/offers/update/:offer_id' element={<Update/>}/>
            <Route path='/adduser' element={<Addusers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App