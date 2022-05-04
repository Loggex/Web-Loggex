import Navbar from "../../Components/Navbar";
import "../../assets/cadastroRotas.css";

export default function CadastroRotas(){
    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="fundoCadastro">
                        <h1>Cadastrar nova rota</h1>
                            <form action="" className="formCadastro">
                                <div className="formularios">
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Origem</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Veículo</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Partida</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Carga</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Peso da carga</h3>
                                        <input type="text" />
                                        </div>
                                    </div>
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Destino</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Motorista</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Chegada</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Descrição</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Volume da carga</h3>
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