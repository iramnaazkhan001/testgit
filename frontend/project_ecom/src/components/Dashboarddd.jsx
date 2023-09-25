import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Dashboarddd() {
    const Navigate = useNavigate();
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 fw-bolder d-none d-sm-inline">LOGO</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li>
                                    <Link
                                        data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline" onClick={() => Navigate("/users")} >Users</span> </Link>
                                </li>
                                {/* <li>
								<Link to="/employee" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage Employees</span> </Link>
							</li>
							<li>
								<Link to="profile" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Profile</span></Link>
							</li>
							<li >
								<a href="#" className="nav-link px-0 align-middle text-white">
									<i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span></a>
							</li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="col p-0 m-0">
                        <div className='p-2 d-flex justify-content-center shadow'>
                            <h4>Welcome to Dashboard</h4>
                        </div>
                        <Outlet />
                        <div>
                            <div className='p-3 d-flex justify-content-around mt-3'>
                                <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
                                    <div className='text-center pb-1'>
                                        <h4>User</h4>
                                    </div>
                                    <hr />
                                    <div className=''>
                                        <h5>Total:</h5>
                                    </div>
                                </div>
                                <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
                                    <div className='text-center pb-1'>
                                        <h4>Shops</h4>
                                    </div>
                                    <hr />
                                    <div className=''>
                                        <h5>Total:</h5>
                                    </div>
                                </div>
                                <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
                                    <div className='text-center pb-1'>
                                        <h4>Revenue</h4>
                                    </div>
                                    <hr />
                                    <div className=''>
                                        <h5>Total:</h5>
                                    </div>
                                </div>
                                <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
                                    <div className='text-center pb-1'>
                                        <h4>Employee</h4>
                                    </div>
                                    <hr />
                                    <div className=''>
                                        <h5>Total:</h5>
                                    </div>
                                </div>
                            </div>

                            {/* List of admin  */}
                            <div className='mt-4 px-5 pt-3'>
                                <h3>List of Admins</h3>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Admin</td>
                                            <td>Admin</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboarddd