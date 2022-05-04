import Navbar from "../../Components/Navbar";
import "../../assets/cadastroVeiculo.css";

export default function CadastroVeiculos(){
    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="fundoCadastroV">
                        <h1>Cadastrar um veículo</h1>
                            <form action="" className="formCadastroV">
                                <div className="formulariosV">
                                    <div className="formColunaV">
                                        <div className="inputDivV">
                                        <h3>Placa</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Cor</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Ano de Fabricação</h3>
                                        <input type="text" />
                                        </div>
                                    </div>
                                    <div className="formColunaV">
                                        <div className="inputDivV">
                                        <h3>Tem seguro?</h3>
                                        <select name="" id="selectSeguro">
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                            </select>
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Chassi</h3>
                                        <input type="text" />
                                        </div>
                                        <div className="inputDivV">
                                        <h3>Quilometragem</h3>
                                        <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="inputDivV" id="estadoVeiculo">
                                    <h3>Estado do Veículo</h3>
                                    <select name="estadoVeiculo" id="">
                                        <option value="true">Funcional</option>
                                        <option value="false">Quebrado</option>
                                    </select>
                                </div>
                                <input value="Cadastrar" type="submit" name="cadastrar" id="botaoCadastrar" />
                            </form>
                            
                               
                    </div>
                </div>
            </main>
        </div>
    )
}