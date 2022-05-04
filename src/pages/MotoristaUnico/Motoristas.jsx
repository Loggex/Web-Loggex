import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import check from "../../assets/checkmark.svg";
import chevron from "../../assets/chevronDir.svg";
import api from "../../Services/api"
import { useLocation } from "react-router";

import "../../assets/Motoristas.css";

export default function Motoristas() {



  

  return (
    <div className="backgroundapp">
        <Navbar/>
      <main>
      <div className='posMain'>
                    <h1>Motoristas</h1>

                    <div className='cardCarro'>
                        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo'/>
                        <div className='infoMotorista'>

                            <span className='nomeMotorista'>Motorista</span>
                            <div className="containerMot">
                            <span className='textoMotorista'>José João Barros</span>
                            <p>(josejoaobarros132@gmail.com)</p>
                            </div>
                            <span className='textoMotorista'>(11) 94783-5489</span>
                        </div>
                        
                        <div className='sidebarMotorista'>
                            <img src={chevron} alt="" />
                        </div>
                    </div>
                    
                </div>
      </main>
    </div>
  );
}
