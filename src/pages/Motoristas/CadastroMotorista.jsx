import Navbar from "../../Components/Navbar";
import usuarioIndef from "../../assets/Ellipse 1.svg";
import "../../assets/cadastroMotorista.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import CellInput from "../../Components/CellInput";
import cpfInput from "../../Components/cpfInput"

import InputMask from "react-input-mask"

export default function CadastroMotorista() {
  const [nomeInput, setNome] = useState("");
  const [cpfIn, setCpf] = useState("");
  const [cnhInput, setCnh] = useState("");
  const [sexoInput, setSexo] = useState("");
  const [celInput, setCel] = useState("");
  const [imgPerfilInput, setImg] = useState("");
  const [idUsuarioBusca, setIdUsuarioBusca] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function cadastrarMotorista(motorista) {
    motorista.preventDefault();

    setIsLoading(true);

    axios
      .post(
        "https://loggex.azurewebsites.net/api/usuarios",
        {
          idTipoUsuario: 2,
          nome: nomeInput,
          sexo: sexoInput,
          imgPerfil: "teste.png",
          cpf: cpfIn,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("usuario-login"),
          },
        }
      )
      .then((resposta) => {
        if (resposta.status === 201) {
          console.log("Usuario cadastrado!");
          // setNome('')
          // setCpf('')
          // setCnh('')
          // setSexo('')
          // setEmail('')
          // setSenha('')
          // setConfirmSenha('')
          // setCel('')
          setIsLoading(false);

          axios
            .get("https://loggex.azurewebsites.net/api/usuarios/cpf/" + cpfIn, {
              headers: {
                Authorization:
                  "Bearer " + localStorage.getItem("usuario-login"),
              },
            })
            .then((resposta) => {
              if (resposta.status === 200) {
                console.log("Usuario buscado");
                setIdUsuarioBusca(resposta.data);

                axios
                  .post(
                    "https://loggex.azurewebsites.net/api/motoristas",
                    {
                      idUsuario: idUsuarioBusca.idUsuario,
                      cnh: cnhInput,
                      numCelular: celInput,
                    },
                    {
                      headers: {
                        Authorization:
                          "Bearer " + localStorage.getItem("usuario-login"),
                      },
                    }
                  )
                  .then((resposta) => {
                    if (resposta.status === 201) {
                      console.log("Motorista cadastrado!");

                      // setNome('')
                      // setCpf('')
                      // setCnh('')
                      // setSexo('')
                      // setEmail('')
                      // setSenha('')
                      // setConfirmSenha('')
                      // setCel('')
                      setIsLoading(false);
                    }
                  })

                  .catch(
                    (erro) => console.log(erro),
                    setInterval(() => {
                      setIsLoading(false);
                    }, 5000)
                  );
              }
            })

            .catch((erro) => console.log(erro));
        }
      })

      .catch(
        (erro) => console.log(erro),
        setInterval(() => {
          setIsLoading(false);
        }, 5000)
      );
  }

  return (
    <div className="backgroundapp">
      <Navbar></Navbar>
      <main>
        <div className="container">
          <div className="containerPerfil">
            <img src={usuarioIndef} alt="" />
            <div>
              <span id="inserirImg">Insira a foto de perfil</span>
              <input value="Escolher imagem" type="submit" />
            </div>
          </div>
          <div className="fundoCadastro">
            <h1>Cadastrar um motorista</h1>
            <form
              action=""
              onSubmit={cadastrarMotorista}
              className="formCadastro"
            >
              <div className="formularios">
                <div className="formColunaCM">
                  <div className="inputDiv">
                    <h3>Nome completo</h3>
                    <input
                      type="text"
                      onChange={(campo) => setNome(campo.target.value)}
                    />
                  </div>
                  <div className="inputDiv">
                    <h3>CPF</h3>
                    <InputMask
                      onChange={(event) => setCpf(event.target.value)}
                      value={cpfIn}
                      mask="999.999.999-99"
                    ></InputMask>
                  </div>
                </div>
                <div className="formColunaCM">
                  <div className="inputDiv">
                    <h3>CNH</h3>
                    <InputMask
                      mask="999999999999"
                      onChange={(campo) => setCnh(campo.target.value)}
                    >
                      </InputMask>
                  </div>
                  <div className="inputDiv">
                    <h3>Sexo</h3>
                    <select
                      name="Sexo"
                      onChange={(campo) => setSexo(campo.target.value)}
                      id="selectSexo"
                    >
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outros">Outro</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="inputDiv">
                <h3>Número de celular</h3>
                <CellInput
                  onChange={(event) => setCel(event.target.value)}
                  value={celInput}
                ></CellInput>
              </div>
              <button type="submit" name="cadastrar" id="botaoCadastrar">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
