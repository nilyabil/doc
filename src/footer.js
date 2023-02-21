import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleH } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
          <footer className="footer bg-dark">
           <FontAwesomeIcon icon={faCircleH} style={{ color: '#45b6fe' }}  className="fa-3x"/>  <p> © 2023 My Company. All rights reserved.</p>
          </footer>

  )
}
