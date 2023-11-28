import { GiBroadsword } from "react-icons/gi"
import Typography from '@mui/material/Typography';

const Carta = ({ heroi, onClick, idCarta, classeAdicional }) => {
    const corDaCarta = heroi.corDaCarta
    const boxShadow = `${corDaCarta} 14.95px 8.95px 7.6px`
    const gradient = `linear-gradient(0deg, rgba(0,0,0,1) 0%, ${corDaCarta} 50%)`

    const aoClicarNaCarta = (evento) => {
        onClick(evento)
    }

    return (
        <div id={idCarta} onClick={aoClicarNaCarta} style={{ background: { corDaCarta }, background: gradient, boxShadow: boxShadow }} className={`${heroi.selecionado ? 'border-[#40128B] border-4 opacity-[100%]' : 'border-black'} hover:opacity-100 opacity-80 flex flex-col gap-2 items-center w-[220px] h-[300px] cursor-pointer border-2 font-[Adventure] ${classeAdicional}`}>
            <div className="w-[80%] h-[70%] mt-6 border-4 border-black">
                <img className="w-full h-full object-cover" src={heroi.imagem} />
            </div>
            <div className="flex flex-col font-bold text-white items-center justify-center">
                <Typography className="text-base" variant="p" component="p">
                    {heroi.nome}
                </Typography >
                <div className="flex items-center gap-2 justify-center">
                    <GiBroadsword />
                    <Typography className="text-base" variant="p" component="p">
                        {heroi.poderTotal}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Carta