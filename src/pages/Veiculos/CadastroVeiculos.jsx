import Navbar from "../../Components/Navbar";
import "../../assets/cadastroVeiculo.css";

export default function CadastroVeiculos(){
    return(
        <div className="backgroundapp">
            <Navbar></Navbar>
            <main>
                <div className="container">
                    <div className="fundoCadastro"></div>
                </div>
            </main>
        </div>
    )
}