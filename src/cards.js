import React from 'react'
import img1 from './images/elyse.png';
import img2 from './images/matthew.png';
import img3 from './images/molly.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasolid , faCircleH , faGraduationCap } from '@fortawesome/free-solid-svg-icons';


export const Cards = (props) => {
    const{id,img,name,speciality,description}=props
  return (
    <div className="ui link cards" style={{display:'inline-block' , margin: '5px',}}>
 
  <div class="card">
    <div class="image">
      <img src={img}/>
    </div>
    <div class="content">
      <div class="header">{name}</div>
      <div class="meta">
      <a id='speciality'>{speciality}</a>
      </div>
      <div class="description">
        {description}
      </div>
    </div>
    <div class="extra content" style={{textAlign:'center'}}>
      <span class="center">
      <div class="ui animated button blue" tabindex="0">
            <div class="visible content">Book Appointment</div>
            <div class="hidden content">
            <i class="right arrow icon"></i>
            </div>
            </div>
      </span>
    </div>
  </div>
</div>
  )
}
