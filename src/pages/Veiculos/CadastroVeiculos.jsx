import Navbar from "../../Components/Navbar";
import "../../assets/cadastroVeiculo.css";

export default function CadastroVeiculos(){
    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="fundoCadastro">
                        <h1>Cadastrar um veículo</h1>
                            <form action="" className="formCadastro">
                                <div className="formularios">
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Placa</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Cor</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Ano de Fabricação</h3>
                                        <input type="text" />
                                        </div>
                                    </div>
                                    <div className="formColuna">
                                        <div className="inputDiv">
                                        <h3>Tem seguro?</h3>
                                        <select name="" id="selectSeguro">
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                            </select>
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Chassi</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDiv">
                                        <h3>Quilometragem</h3>
                                        <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <h3>Estado do Veículo</h3>
                                <select name="estadoVeiculo" id="">
                                    <option value="true">Funcional</option>
                                    <option value="false">Quebrado</option>
                                </select>
                                <input value="Cadastrar" type="submit" name="cadastrar" id="" />
                            </form>
                            
                               
                    </div>
                </div>
            </main>
        </div>
    )
}