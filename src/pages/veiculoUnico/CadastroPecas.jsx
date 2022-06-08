import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";

import "../../assets/Pecas.css";
import api from "../../Services/api";

export default function CadastroPecas() {
  const [nomePeca, setNomePeca] = useState("");
  const [nomeVeiculo, setNomeVeiculo] = useState("");
  const [nomeCarreta, setNomeCarreta] = useState("")
  const [modeloVeiculo, setModeloVeiculo] = useState("")
  const [nomeCarroceria, setNomeCarroceria] = useState("")
  const [listaPecas, setListaPecas] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  // função responsável por fazer a requisição que cadastra um novo tipo de usuário
  function cadastrarTipoPecas(evento) {
    // evita o comportamento padrão do navegador
    evento.preventDefault();

    // define que uma requisição está em andamento
    setIsLoading(true);


    // faz a chamada para a API
    axios.post('http://deploy-loggex-backend.azurewebsites.net/api/tipospecas', {
      nomePeca: nomePeca
    }, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
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
          setIsLoading(false);
        }
      })
      // caso ocorra algum erro, exibe no console do navegador este erro
      // e volta o valor do state isLoading para false
      .catch(erro => console.log(erro), setInterval(() => {
        setIsLoading(false)
      }, 5000));
  };

  function CadastrarPecas() {
    setListaPecas([...listaPecas, nomePeca])
    setNomePeca('')
  }

  async function CadastrarTipoVeiculo() {

    let objTipoVeiculo = {
      tipoCarreta: nomeCarreta,
      tipoVeiculo: nomeVeiculo,
      modeloVeiculo: modeloVeiculo,
      tipoCarroceria: nomeCarroceria,
      pecas: listaPecas
    }

    await api.post('/tiposveiculos', objTipoVeiculo, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
      }
    }).then(resposta => console.log(resposta))
      .catch(error => console.log(error))
  }

  // exibe no console o valor do state titulo a cada alteração feita pelo usuário

  return (
    <div className="backgroundapp">
      <Navbar />
      <main>
        <div className="containerInfoPeca">
          <div className="containerPecaUno">
            <div className="containerPeca2">
              <h1>Cadastrar tipo veículo</h1>

              <div className="inputContainer">
                <div className="boxInput">
                  <p>Nome do tipo veículo
                  </p>
                  <input
                    type="text"
                    placeholder="Nome do tipo veículo"
                    value={nomeVeiculo}
                    onChange={(campo) => setNomeVeiculo(campo.target.value)}
                  />
                </div>
                <div className="boxInput">
                  <p>Nome do tipo carreta
                  </p>
                  <input
                    type="text"
                    placeholder="Nome do tipo carreta"
                    value={nomeCarreta}
                    onChange={(campo) => setNomeCarreta(campo.target.value)}
                  />
                </div>
                <div className="boxInput">
                  <p>Nome do modelo do veículo
                  </p>
                  <input
                    type="text"
                    placeholder="Nome do modelo do veículo"
                    value={modeloVeiculo}
                    onChange={(campo) => setModeloVeiculo(campo.target.value)}
                  />
                </div>
                <div className="boxInput">
                  <p>Nome da carroceria
                  </p>
                  <input
                    type="text"
                    placeholder="Nome da carroceria"
                    value={nomeCarroceria}
                    onChange={(campo) => setNomeCarroceria(campo.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="containerBtn">
              <button type="submit" onClick={() => CadastrarTipoVeiculo()}>Cadastrar</button>
            </div>
          </div>
          <div className="containerPecaDos">
            <div className="containerPeca2">
              <h1>Cadastrar peças do veículo</h1>

              <div className="inputContainer">
                <div className="boxInput">
                  <p>Nome do tipo de peça</p>
                  <input
                    type="text"
                    placeholder="Nome do tipo de peça"
                    value={nomePeca}
                    onChange={(campo) => setNomePeca(campo.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="containerBtn">
              <button onClick={() => CadastrarPecas()} type="submit">Cadastrar</button>
            </div>

          </div>
          {
            listaPecas.map((peca) => {
              return (
                <div className="containerPeca">
                  <p>{peca}</p>
                </div>
              )
            })
          }
        </div>
      </main>
    </div>
  );
}
