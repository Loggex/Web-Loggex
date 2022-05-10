import Navbar from "../../Components/Navbar";
import usuarioIndef from "../../assets/Ellipse 1.svg"
import "../../assets/cadastroMotorista.css";
import { useState } from "react";
import axios from "axios";



export default function CadastroMotorista(){
    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="fundoCadastro">
                        <h1>Agendar manutenção</h1>
                            <form action="" className="formCadastro">
                                <div className="formularios">
                                    <div className="formColunaMtc formColuna">
                                        <div className="inputDiv">
                                        <h3>Veículo</h3>
                                        <select name="Sexo" id="selectSexo">
                                            <option value="veiculo">Veiculo</option>
                                        </select>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Veículo</h3>
                                        <select name="selectVeiculo" id="">
                                            <option value="veiculo"></option>
                                        </select>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Descrição</h3>
                                        <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" name="cadastrar" id="botaoCadastrar">Cadastrar</button>
                            </form>
                            
                               
                    </div>
                </div>
            </main>
        </div>
    )
}