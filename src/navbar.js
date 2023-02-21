import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleH } from '@fortawesome/free-solid-svg-icons';
import "./index.css";

export const Navbar = () => {
  
  return (
    <nav className="navbar navbar-dark bg-dark"  style={{display:'flex',alignItem:'center',justifyContent:'space-between'}}>
        <FontAwesomeIcon icon={faCircleH} style={{ color: '#45b6fe' }}  className="fa-3x"/>
        <div class="ui icon input" style={{marginRight:'300px'}}>
        <input type="text" placeholder="Search by : Doctors, Specialities, Symptoms, Diseases &amp; Treatments" style={{width:'700px'}}/>
        <i class=" circular search link icon" style={{color:'#45b6fe'}}></i>
        </div>

    </nav>
  )
}
