import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
  <>
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className="container">
            <NavLink className="navbar-brand">Expense Tracker</NavLink>

            <button className="btn btn-outline-warning" data-bs-toggle="offcanvas" data-bs-target="#sideMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

        {/* side navigation, offcanvas-start(left), offcanvas-end(right) */}
        <div className="offcanvas offcanvas-end" id="sideMenu" tabIndex={-1}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title text-secondary">Expense Tracker</h5>
                <button className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
                <ul className='list-group text-center'>
                    <li className='list-group-item nav-item'>
                        <NavLink to={`/`} className='nav-link'>Home</NavLink>

                    </li>
                    <li className='list-group-item nav-item'>
                     <NavLink to={`/create`} className="nav-link">Create</NavLink>
                    </li>
                </ul>
            </div>
        </div>
  </>
  )
}

export default Menu