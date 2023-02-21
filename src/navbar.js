import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleH } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" >
        <FontAwesomeIcon icon={faCircleH} style={{ color: '#45b6fe' }}  className="fa-3x"/>

    </nav>
  )
}
