import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { GoNote } from "react-icons/go";
import { MdOutlineCheckCircle } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { BiMessageCheck } from "react-icons/bi";
import { BiColorFill } from "react-icons/bi";
import { IoMdCar } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";

import "../../assets/Pecas.css";
import { Link } from "react-router-dom";

export default function CadastroPecas() {
  return (
    <div className="backgroundapp">
      <Navbar />
      <main>
        <div className="containerInfoPeca">
          <div className="containerPeca">
            <div className="containerPeca2">
              <h1>Cadastrar tipo peças do veículo</h1>

              <div className="inputContainer">
                <div className="boxInput">
                  <p>Nome da peça</p>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="containerBtn">
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
