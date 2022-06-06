import React from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { IoCalendarOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { RiSteering2Line } from "react-icons/ri";
import imageRota from "../../assets/imageRota.svg";
import { useState, useEffect } from "react";

import "../../assets/Rota.css";

export default function Rota() {

    const [listarota, setListaRota] = useState()

    async function buscarRota() {
        await axios(
          "https://loggex.azurewebsites.net/api/Rotas/idRota" +
            window.location.pathname.split("/")[2],
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("usuario-login"),
            },
          }
        )
          .then((resposta) => {
            if (resposta.status === 200) {
              setListaRota(resposta.data);
            }
          })
    
          .catch((erro) => console.log(erro));
      }
    
      useEffect(() => {
        buscarRota();
      });
    


  return (
    <div className="backgroundapp">
      <Navbar />
      <main className="maincomnav">
        <div className="containerInfoRota">
          <div className="containerRota">
            <div className="containerBox">
              <img src={imageRota} className="imagemRota" />
              <div className="boxInfo">
                    <div className="especInfo1">
                        <p className="infoTitulo">Carapicuíba, Sp</p>
                        <p className="infoTitulo">Ouro Fino, MG</p>
                    </div>

                    <div className="boxInfoEmail">

                    

                        <div className="especInfo2">

                            <BsTruck className="goFile" />
                            
                            

                            <p className="infoPergunta">Veículo:</p>

                            <p className="infoResposta">Volvo sh 540 6x4</p>
                            
                        </div>
                        <div className="especInfo">

                            <RiSteering2Line className="goFile" />
                            
                            

                            <p className="infoPergunta">Motorista:</p>

                            <p className="infoResposta">José João da Silva</p>
                            
                        </div>
                        <div className="especInfo">

                            <IoCalendarOutline className="goFile" />
                            
                            

                            <p className="infoPergunta">Data de partida:</p>

                            <p className="infoResposta">04/05/2022</p>
                            
                        </div>
                        <div className="especInfo">

                            <IoCalendarOutline className="goFile" />
                            
                            

                            <p className="infoPergunta">Data de chegada:</p>

                            <p className="infoResposta">04/05/2022</p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="containerBoxinfo">
                <div className="containerCarga">


                    <div className="especInfo3">




                        <p className="infoPergunta">Carga:</p>

                        <p className="infoResposta"><p>Pedras</p></p>

                    </div>                      
                    <div className="especInfo3">




                        <p className="infoPergunta">Peso:</p>

                        <p className="infoResposta"><p>15 Toneladas</p></p>

                    </div>                      
                    <div className="especInfo3">




                        <p className="infoPergunta">Volume:</p>

                        <p className="infoResposta"><p>50m³</p></p>

                    </div>                      
                </div>

                
            </div>
                <div className="containerDesc">

                    <div className="especInfo4">

                    


                        <p className="infoPergunta">Descrição:</p>

                        <p className="infoResposta2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”
                        </p>

                    </div>        

                </div>
          </div>
        </div>
      </main>
    </div>
  );
}
