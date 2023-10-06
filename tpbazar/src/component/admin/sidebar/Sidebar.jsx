import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <CDBSidebar textColor="white" backgroundColor="black">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>

      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="/"><CDBSidebarMenuItem><i class="bi bi-house-door-fill"></i> Home</CDBSidebarMenuItem></Link>
          <Link to="/admin/users"><CDBSidebarMenuItem><i class="bi bi-people-fill"></i> Users</CDBSidebarMenuItem></Link>
          <Link to="/admin/roles"><CDBSidebarMenuItem><i class="bi bi-stickies-fill"></i> Roles</CDBSidebarMenuItem></Link>
          <Link to="/admin/category"><CDBSidebarMenuItem><i class="bi bi-grid-fill"></i> Category</CDBSidebarMenuItem></Link>
          <Link to="/admin/subcategory"><CDBSidebarMenuItem><i class="bi bi-exclude"></i> Sub Category</CDBSidebarMenuItem></Link>
          <Link to="/admin/retailer"><CDBSidebarMenuItem><i class="bi bi-person-plus-fill"></i> Retailer</CDBSidebarMenuItem></Link>
          <Link to="/admin/customers"><CDBSidebarMenuItem><i class="bi bi-person-arms-up"></i> Customers</CDBSidebarMenuItem></Link>
          <Link to="/admin/offers"><CDBSidebarMenuItem><i class="bi bi-tags-fill"></i> Offers</CDBSidebarMenuItem></Link>
          <Link to="/adimn/others"><CDBSidebarMenuItem><i class="bi bi-grid-3x3-gap-fill"></i> Others</CDBSidebarMenuItem></Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default SideBar;