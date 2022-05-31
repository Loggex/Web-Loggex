import Navbar from "../../Components/Navbar";
import usuarioIndef from "../../assets/Ellipse 1.svg"
import "../../assets/cadastroMotorista.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CadastroMotorista() {

    const [nomeInput, setNome] = useState('');
    const [cpfInput, setCpf] = useState('');
    const [cnhInput, setCnh] = useState('');
    const [sexoInput, setSexo] = useState('');
    const [emailInput, setEmail] = useState('');
    const [senhaInput, setSenha] = useState('');
    const [confirmSenhaInput, setConfirmSenha] = useState('');
    const [celInput, setCel] = useState('');
    const [imgPerfilInput, setImg] = useState('');
    const [idUsuarioBusca, setIdUsuarioBusca] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarMotorista(motorista) {
        motorista.preventDefault();

        setIsLoading(true);


        axios.post('http://localhost:5000/api/usuarios', {

            idTipoUsuario: 2,
            nome: nomeInput,
            sexo: sexoInput,
            imgPerfil: 'teste.png',
            cpf: cpfInput

        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {
                    console.log('Usuario cadastrado!');
                    console.log("Cpf buscado: " + cpfInput);
                    
                    //Get de usuários
                    axios.get("http://localhost:5000/api/usuarios/cpf/" + cpfInput, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("usuario-login"),
                        }
                    })
                        .then((resposta) => {
                            if (resposta.status === 200) {
                                console.log("Usuario buscado com sucesso");
                                //Usuário vazio
                                setIdUsuarioBusca(resposta.data);
                                console.log("Usuário encontrado: " + idUsuarioBusca);
                                
                                //Post de motorista
                                axios.post('http://localhost:5000/api/motoristas', {

                                    idUsuario: idUsuarioBusca.idUsuario,
                                    cnh: cnhInput,
                                    numCelular: celInput

                                }, {
                                    headers: {
                                        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
                                    }
                                })
                                    .then(resposta => {
                                        if (resposta.status === 201) {
                                            console.log('Motorista cadastrado!');
                                            setIsLoading(false);
                                        }
                                    })

                                    .catch(erro => console.log(erro), setInterval(() => {
                                        setIsLoading(false)
                                    }, 5000));


                            }
                        })

                        .catch((erro) => console.log(erro));
                }


            })

            .catch(erro => console.log(erro), setInterval(() => {
                setIsLoading(false)
            }, 5000));

        // setNome('')
        // setCpf('')
        // setCnh('')
        // setSexo('')
        // setEmail('')
        // setSenha('')
        // setConfirmSenha('')
        // setCel('')


    };

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
                        <form action="" onSubmit={cadastrarMotorista} className="formCadastro">
                            <div className="formularios">
                                <div className="formColuna">
                                    <div className="inputDiv">
                                        <h3>Nome completo</h3>
                                        <input type="text" onChange={(campo) => setNome(campo.target.value)} />
                                    </div>
                                    <div className="inputDiv">
                                        <h3>CPF</h3>
                                        <input type="text" onChange={(campo) => setCpf(campo.target.value)} />
                                    </div>
                                    <div className="inputDiv">
                                        <h3>CNH</h3>
                                        <input type="text" onChange={(campo) => setCnh(campo.target.value)} />
                                    </div>
                                    <div className="inputDiv">
                                        <h3>Sexo</h3>
                                        <select name="Sexo" onChange={(campo) => setSexo(campo.target.value)} id="selectSexo">
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Outros">Outro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="formColuna">
                                    <div className="inputDiv">
                                        <h3>Email</h3>
                                        <input type="text" onChange={(campo) => setEmail(campo.target.value)} />
                                    </div>
                                    <div className="inputDiv">
                                        <h3>Senha</h3>
                                        <input type="text" onChange={(campo) => setSenha(campo.target.value)} />
                                    </div>
                                    <div className="inputDiv">
                                        <h3>Confirmar senha</h3>
                                        <input type="text" onChange={(campo) => setConfirmSenha(campo.target.value)} />
                                    </div>
                                    <div className="inputDiv">
                                        <h3>Número de celular</h3>
                                        <input type="text" onChange={(campo) => setCel(campo.target.value)} />
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