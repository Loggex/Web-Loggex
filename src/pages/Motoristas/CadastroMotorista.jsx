import Navbar from "../../Components/Navbar";
import usuarioIndef from "../../assets/Ellipse 1.svg"
import "../../assets/cadastroMotorista.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CadastroMotorista(){

    const [nomeInput, setNome] = useState('');
    const [cpfInput, setCpf] = useState('');
    const [cnhInput, setCnh] = useState('');
    const [sexoInput, setSexo] = useState('');
    const [emailInput, setEmail] = useState('');
    const [senhaInput, setSenha] = useState('');
    const [confirmSenhaInput, setConfirmSenha] = useState('');
    const [celInput, setCel] = useState('');
    const [imgPerfilInput, setImg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarMotorista(motorista) {
        motorista.preventDefault();

        setIsLoading(true);


            axios.post('http://localhost:5000/api/motorista', {
                cnh: cnhInput,
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                    // 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuZHJlbWVsb0BlbWFpbC5jb20iLCJqdGkiOiIxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiMSIsIlRlbGVmb25lIjoiMTE5ODc2NTQzMjEiLCJleHAiOjE2NTIxMDM0NTcsImlzcyI6IkxvZ2dleC53ZWJBUEkiLCJhdWQiOiJMb2dnZXgud2ViQVBJIn0.s5YxTqVrgD025rlCLq4Ldhg5Fnm6jTFpyo8VYr4tvII'
                }
            })
                .then(resposta => {
                    if (resposta.status === 201) {
                        console.log('Veiculo cadastrado!');
    
                        setNome('')
                        setCpf('')
                        setCnh('')
                        setSexo('')
                        setEmail('')
                        setSenha('')
                        setConfirmSenha('')
                        setCel('')
                        setIsLoading(false);
                    }
                })
    
                .catch(erro => console.log(erro), setInterval(() => {
                    setIsLoading(false)
                }, 5000));
        
    };

    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="containerPerfil">
                        <img src={usuarioIndef} alt="" />
                        <div>
                            <span id="inserirImg">Insira a foto de perfil</span>
                            <input value="Escolher imagem" type="submit"/>
                        </div>
                    </div>
                    <div className="fundoCadastro">
                        <h1>Cadastrar um motorista</h1>
                            <form action="" className="formCadastro">
                                <div className="formularios">
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Nome completo</h3>
                                        <input type="text" onChange={(campo) => setNome(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>CPF</h3>
                                        <input type="text" onChange={(campo) => setCpf(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>CNH</h3>
                                        <input type="text" onChange={(campo) => setCnh(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Sexo</h3>
                                        <select name="Sexo" onChange={(campo) => setSexo(campo.target.value)} id="selectSexo">
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                            <option value="outros">Outro</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Email</h3>
                                        <input type="text" onChange={(campo) => setEmail(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Senha</h3>
                                        <input type="text" onChange={(campo) => setSenha(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Confirmar senha</h3>
                                        <input type="text" onChange={(campo) => setConfirmSenha(campo.target.value)}/>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Número de celular</h3>
                                        <input type="text" onChange={(campo) => setCel(campo.target.value)}/>
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