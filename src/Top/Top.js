import React from "react";

import './style.css';
import logo from '../assets/logo.png';

    
export default function Top () {
    const description = 'Logo ZapRecall, um raio amarelo com contorno vermelho';
    
    return( 
    <div className='top'>
      <img src={logo} alt={description}/>  
        <h1>ZapRecall</h1>
    </div>
    )
}