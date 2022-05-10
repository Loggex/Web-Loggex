import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useHistory } from "react-router";

import api from "../../Services/api";

import "../../assets/Pecas.css";

export default function CadastroPecas() {
  const initialValue = {
    nomePeca: "",
  };
  const [nomePeca, setNomePeca] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [idTipoPeca, setIdTipoPeca] = useState(0);

  const PromotionForm = () => {
    const [values, setValues] = useState(initialValue);
    const history = useHistory();

    function onChange(ev) {
      const { name, value } = ev.target;

      setValues({ ...values, [name]: value });
    }

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
                      onChange={onChange}
                      value={nomePeca}
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
  };
}
