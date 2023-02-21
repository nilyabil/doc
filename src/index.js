import React from 'react';
import ReactDOM  from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './index.js';
import { Navbar } from './navbar.js';
import { Cards } from './cards.js';
import { doctors } from './doctors.js';
import "./index.css";
import { Footer } from './footer.js';


function Home(){
 
  return(
    <div>
    
     <Navbar/>
     {doctors.map((doctor)=>{
      return  <Cards {...doctor} key={doctor.id} />
     })}
     
     <Footer/>
    </div>
  )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home/>);
