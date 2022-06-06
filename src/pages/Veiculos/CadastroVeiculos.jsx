import Navbar from "../../Components/Navbar";
import "../../assets/cadastroVeiculo.css";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import api from "../../Services/api";

export default function CadastroVeiculos() {
  const [tipoVeiculoInput, setTipo] = useState(0);
  const [placaInput, setPlaca] = useState("");
  const [anoInput, setAno] = useState(0);
  const [seguroInput, setSeguro] = useState(false);
  const [corInput, setCor] = useState("");
  const [chassiInput, setChassi] = useState("");
  const [quilometragemInput, setKm] = useState(0);
  const [estadoVeiculoInput, setEstado] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [Opcoes, setOpcoes] = useState([]);

  const history = useHistory();
  const navCad = (e) => {
    history.push("/pecas");
  };

  async function BuscarTiposVeiculos() {

    await api.get('/tiposveiculos', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("usuario-login"),
      },
    }
    ).then((resposta) => {
      if (resposta.status === 200) {
        setOpcoes(resposta.data);
        console.log('teste')
        console.log(Opcoes)
      }
    }).catch((erro) => console.log(erro));
  }

  useEffect(() => {
    BuscarTiposVeiculos();
  }, []);

  function cadastrarVeiculo(veiculo) {
    veiculo.preventDefault();
    setIsLoading(true);

    axios
      .post(
        "http://localhost:5000/api/veiculos",
        {
          idTipoVeiculo: tipoVeiculoInput,
          placa: placaInput,
          anoFabricacao: anoInput,
          seguro: seguroInput,
          cor: corInput,
          chassi: chassiInput,
          estadoVeiculo: estadoVeiculoInput,
          quilometragem: quilometragemInput,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("usuario-login"),
          },
        }
      )
      .then((resposta) => {
        if (resposta.status === 201) {
          console.log("Veiculo cadastrado!");

          setTipo(0);
          setPlaca("");
          setAno(0);
          setSeguro(false);
          setCor("");
          setChassi("");
          setKm(0);
          setEstado(false);
          setIsLoading(false);
        }
      })

      .catch(
        (erro) => console.log(erro)
      );
  }

  return (
    <div className="backgroundapp">
      <Navbar></Navbar>
      <main className="maincomnav">
        <div className="container">
          <div className="fundoCadastroV">
            <h1>Cadastrar um veículo</h1>
            <form
              action=""
              onSubmit={cadastrarVeiculo}
              className="formCadastroV"
            >
              <div className="formulariosV">
                <div className="formColunaV">
                  <div className="inputDivVei">
                    <h3>Placa</h3>
                    <InputMask
                      type="text"
                      onChange={(campo) => setPlaca(campo.target.value)}
                      maxLength="7"
                    ></InputMask>
                  </div>
                  <div className="inputDivVei">
                    <h3>Cor</h3>
                    <input
                      type="text"
                      onChange={(campo) => setCor(campo.target.value)}
                    />
                  </div>
                  <div className="inputDivVei">
                    <h3>Ano de Fabricação</h3>
                    <input
                      type="text"
                      onChange={(campo) => setAno(campo.target.value)}
                    />
                  </div>
                  <div className="inputDivVei">
                    <h3>tipo de veículo</h3>
                    <select
                      onChange={(campo) => setTipo(campo.target.value)}
                    >
                      {
                        Opcoes.map((opcao) => {
                          return (
                            <option value={opcao.idTipoVeiculo}>{opcao.modeloVeiculo}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <Link onClick={navCad} className="cadTipoVei">
                    Cadastrar um tipo de Veiculo
                  </Link>
                </div>

                <div className="formColunaV">
                  <div className="inputDivVei">
                    <h3>Tem seguro?</h3>
                    <select
                      name=""
                      onChange={
                        (
                          (campo) => setSeguro(campo.target.value))
                      }
                      id="selectSeguro"
                    >
                      <option value="true">Sim</option>
                      <option value="false">Não</option>
                    </select>
                  </div>
                  <div className="inputDivVei">
                    <h3>Chassi</h3>
                    <input
                      type="text"
                      onChange={(campo) => setChassi(campo.target.value)}
                    />
                  </div>
                  <div className="inputDivVei">
                    <h3>Quilometragem</h3>
                    <InputMask
                      onChange={(campo) => setKm(campo.target.value)}
                      value={quilometragemInput}
                      mask="999"
                    ></InputMask>
                  </div>

                  <div className="inputDivVei" id="estadoVeiculo">
                    <h3>Estado do Veículo</h3>
                    <select
                      name="estadoVeiculo"
                      onChange={
                        (
                          (campo) => setEstado(campo.target.value))
                      }
                      id=""
                    >
                      <option value="true">Funcional</option>
                      <option value="false">Quebrado</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                value="Cadastrar"
                type="submit"
                name="cadastrar"
                id="botaoCadastrar"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
