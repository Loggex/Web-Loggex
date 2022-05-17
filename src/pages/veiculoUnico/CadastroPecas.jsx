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

import api from "../../Services/api"

import "../../assets/Pecas.css";
import { Link } from "react-router-dom";

export default function CadastroPecas() {
  const [nomePeca, setNomePeca] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [idTipoPeca, setIdTipoPeca] = useState(0)


  // função responsável por fazer a requisição que cadastra um novo tipo de usuário
  function cadastrarTipoPecas(evento) {
    // evita o comportamento padrão do navegador
    evento.preventDefault();

    // define que uma requisição está em andamento
    setIsLoading( true );

    
    // faz a chamada para a API
    axios.post('http://localhost:5000/api/tipospecas', {
        nomePeca : nomePeca
    }, {
         headers : {
            'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
        } 
    })
    .then(resposta => {
        // se o status code da resposta da requisição for igual a 201
        if (resposta.status === 201) {
            // exibe a mensagem no console do navegador,
            console.log('Tipo de peca cadastrado!');
            // atualiza a lista de tipos de usuário automaticamente,
            // reseta o valor do state titulo,
            setNomePeca('');
            // e volta o valor do state isLoading para false
            setIsLoading( false );
        }
    })
    // caso ocorra algum erro, exibe no console do navegador este erro
    // e volta o valor do state isLoading para false
    .catch(erro => console.log(erro), setInterval(() => {
        setIsLoading( false )
    }, 5000));
};

// exibe no console o valor do state titulo a cada alteração feita pelo usuário
console.log(nomePeca);

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
                  <input
                   type="text"
                   placeholder="Nome da peça"
                   value={nomePeca}
                   onChange={(campo) => setNomePeca(campo.target.value)}
                   />
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
