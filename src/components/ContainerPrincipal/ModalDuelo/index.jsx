import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDueloHerois } from '../../../context/Duelo';
import Carta from '../ContainerConteudo/ContainerCartas/Cartas/Carta';

const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    background: 'rgb(24,18,43)',
    background: 'radial-gradient(circle, rgba(24,18,43,1) 0%, rgba(101,40,247,1) 25%, rgba(24,18,43,1) 50%, rgba(101,40,247,1) 75%, rgba(24,18,43,1) 100%)',
    border: '4px solid #fff',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    fontFamily: 'Adventure'
};

const ModalDuelo = ({ eventoClique, modalFechada }) => {

    const { duelo } = useDueloHerois()

    const [open, setOpen] = React.useState(false);
    const [heroiVencedor, setHeroiVencedor] = React.useState()
    const [heroiVencedorCor, setHeroiVencedorCor] = React.useState()

    const [statusArrayHeroiUm, setStatusArrayHeroiUm] = React.useState([])

    const handleClose = (evento) => {
        modalFechada(evento)
        setOpen(false)
        duelo.heroiUm.selecionado = false
        duelo.heroiDois.selecionado = false
        duelo.heroiUm = ''
        duelo.heroiDois = ''
    }

    React.useEffect(() => {
        abrirModal()
    }, [eventoClique])

    const abrirModal = () => {
        if (duelo.heroiUm !== '' && duelo.heroiDois !== '') {
            const statusArrayHeroiUm = Object.entries(duelo.heroiUm.status)
            if (duelo.heroiUm.poderTotal > duelo.heroiDois.poderTotal) {
                setHeroiVencedor(duelo.heroiUm.nome)
                setHeroiVencedorCor(duelo.heroiUm.corDaCarta)
            } else if (duelo.heroiUm.poderTotal < duelo.heroiDois.poderTotal) {
                setHeroiVencedor(duelo.heroiDois.nome)
                setHeroiVencedorCor(duelo.heroiDois.corDaCarta)
            } else {
                setHeroiVencedor("Empate")
            }
            setStatusArrayHeroiUm(statusArrayHeroiUm)
            setOpen(true)
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id="responsividadeModalDuelo" sx={styleBox}>
                    {duelo.heroiUm !== '' && duelo.heroiDois !== '' && heroiVencedor !== '' && (
                        <div className='max-md:gap-4 max-md:text-center flex flex-col items-center gap-8 text-white'>
                            <h2 className='text-4xl'>Duelo!</h2>
                            <div className='max-md:flex-col max-md:items-center flex gap-8'>
                                <Carta classeAdicional="max-md:hidden" heroi={duelo.heroiUm} />
                                <div className='flex items-center text-center justify-center gap-4'>
                                    <div className='flex flex-col gap-6'>
                                        {statusArrayHeroiUm.map(([atributo, valor1]) => {
                                            const valor2 = duelo.heroiDois.status[atributo]
                                            const estilo1 = { color: 'green' }
                                            const estilo2 = { color: 'red' }
                                            const estilo3 = { color: 'grey' }

                                            return (
                                                <div key={atributo} style={{ boxShadow: 'black 0px 7px 29px 0px', padding: '0 4px' }} className='max-md:hidden flex gap-2 justify-center'>
                                                    <p style={valor1 > valor2 ? estilo1 : valor1 < valor2 ? estilo2 : estilo3}>{valor1}</p>
                                                    <>{atributo}</>
                                                    <p style={valor1 > valor2 ? estilo2 : valor1 < valor2 ? estilo1 : estilo3}>{valor2}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <Carta classeAdicional="max-md:hidden" heroi={duelo.heroiDois} />
                            </div>
                            {heroiVencedor === "Empate" ? (
                                <h2 className='text-4xl'>Empate entre <span style={{ color: 'grey' }}>{duelo.heroiUm.nome}</span> e <span style={{ color: 'grey' }}>{duelo.heroiDois.nome}</span></h2>
                            ) : (
                                <h2 className='text-4xl'>O Herói vencedor é <span style={{ color: heroiVencedorCor }}>{heroiVencedor}</span></h2>
                            )
                            }
                        </div>
                    )}
                </Box>
            </Modal>
        </div>
    );
}

export default ModalDuelo