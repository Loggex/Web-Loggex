import axios from 'axios';
import Navbar from '../../Components/Navbar';

export default function Checklist(){
    return (
        <div className='card' key={}>
                        <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3" alt="imagem do carro" className='imgVeiculo'/>
                        <div className='infoVeiculo'>
                            <span className='nomeVeiculo'>{}</span>
                            <span className='textoVeiculo'>{}</span>
                            <p>
                            </p>
                            <span className='textoVeiculo'>{}</span>
                        </div>
                        <div className='estadoVeiculo'>
                            <span>Operante</span>
                            <img src={} alt="marca de ok" />
                        </div>
                        <div className='next'>
                            <img src={chevron} alt="" />
                        </div>
                    </div>
    )
}