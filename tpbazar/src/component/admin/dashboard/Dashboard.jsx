import React from 'react'
import Navbarr from '../navbar/Navbar'
import SideBar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
function Dashboard() {
    return (
        <div>
            <Navbarr />
            <div style={{display:'flex', flexDirection:'row'}}>
                <div>
                    <SideBar />
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard