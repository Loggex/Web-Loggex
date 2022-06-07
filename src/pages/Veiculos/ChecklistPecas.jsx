import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import check from '../../assets/checkmark.svg'
import negativo from '../../assets/x.svg'
import chevron from '../../assets/chevronDir.svg'
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import IndiceComparacao from '../../Components/IndiceComparacao';
import { Progress, Grid } from "@nextui-org/react";

export default function Checklist() {
    const [listaPecas, setlistaPecas] = useState([]);
    const [imgPeca, setImgPeca] = useState('')
    const [imPecaC, setImgPecaC] = useState('')
    const location = useLocation()
    const { setVisible, bindings } = useModal();

    async function BuscarPecas() {

        console.log(location.pathname)
        let placa = location.pathname.split('/')[2]
        console.log(placa)

        await axios('https://loggex.azurewebsites.net/api/pecas/checklist/' + placa, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    setlistaPecas(resposta.data)
                }
            })

            .catch(erro => console.log(erro));
    };

    function MostrarImagens(endImagem, endImagemC) {
        setImgPeca(endImagem)
        setImgPecaC(endImagemC)
        setVisible(true)
    }

    useEffect(() => { BuscarPecas() }, []);

    return (
        <div className='backgroundapp'>
            <Navbar></Navbar>
            <main className='mainlista'>
                <div className='posMain'>
                    <h1>Checklist</h1>
                    {
                        listaPecas.map((peca) => {
                            return (
                                <div className='card' key={peca.idPeca}>
                                    <div>
                                        <Modal
                                            scroll
                                            fullScreen
                                            closeButton
                                            aria-labelledby="modal-title"
                                            aria-describedby="modal-description"
                                            {...bindings}
                                        >
                                            <Modal.Header>
                                                <p id="modal-title" className='tituloImgModal' size={18}>
                                                    Estado atual da peça:
                                                </p>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div className='containerModal'>
                                                    <div className='boxImg'>
                                                        <p>Imagem original</p>
                                                        <img src={"https://loggex.azurewebsites.net/StaticFiles/Images/" + imPecaC} alt="" />
                                                    </div>
                                                    <div className='boxImg'>
                                                        <p>Imagem atual</p>
                                                        <img src={"https://loggex.azurewebsites.net/StaticFiles/Images/" + imgPeca} alt="" />
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button style={{ 'backgroundColor': '#060657' }} onClick={() => setVisible(false)}>Fechar</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <div className='posChecklist'>
                                        <div className='infoMotorista'>
                                            <span className='nomePeca'>{peca.idTipoPecaNavigation.nomePeça}</span>
                                            <span className='ALteracaoPeca'>Última alteração em:</span>
                                        </div>
                                    </div>
                                    {
                                        peca.estadoPeca === true &&
                                        <div className='estadoVeiculoTrue'>
                                            <span>Operante</span>
                                            <img src={check} alt="marca de ok" />
                                        </div>
                                    }

                                    {
                                        peca.estadoPeca === false &&
                                        <div className='estadoVeiculoFalse'>
                                            <span>Não operante</span>
                                            <img src={negativo} alt="marca de ok" />
                                        </div>
                                    }

                                    <Grid.Container xs={30} sm={4} gap={1}>
                                        <Grid>
                                            <p>Diferença de imagens</p>
                                            <p>{Math.round(peca.semelhanca * 100)}%</p>
                                            <Progress color="primary" value={Math.round(peca.semelhanca * 100)} />
                                        </Grid>
                                    </Grid.Container>

                                    <button onClick={() => MostrarImagens(peca.imgPeca, peca.imgPecaC)} className='next'>
                                        <img src={chevron} alt="" />
                                    </button>
                                </div>
                            )
                        })
                    }


                </div>
            </main>
        </div>
    )
}

