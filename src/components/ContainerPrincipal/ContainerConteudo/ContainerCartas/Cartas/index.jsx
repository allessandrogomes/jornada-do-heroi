import { useEffect, useState } from "react"
import LazyLoad from "react-lazy-load";
import { useFiltroHerois } from "../../../../../context/FiltroHeroi";
import { chamadaAPI } from "../../../../../services/apiService";
import { useDueloHerois } from "../../../../../context/Duelo";
import Carta from "./Carta";

const Cartas = ({ eventoClique }) => {

    const [listaDeHerois, setListaDeHerois] = useState([])
    const [listaDeHeroisFiltrados, setListaDeHeroisFiltrados] = useState([])
    const [heroisAMostrar, setHeroisAMostrar] = useState([])
    const { atualizarDuelo } = useDueloHerois()

    //Busca dados da API e guarda nos estados
    useEffect(() => {
        const buscarDados = async () => {
            try {
                const dados = await chamadaAPI()
                setListaDeHerois(dados)
                setHeroisAMostrar(dados)
            } catch (error) {
                console.error('Erro ao obter dados:', error)
            }
        }
        buscarDados()
    }, [])

    const { valor } = useFiltroHerois()

    // Executa a filtragem dos heróis ao digitar no campo de pesquisa
    useEffect(() => {
        let listaDeHeroisFiltrados = listaDeHerois.filter(heroi => heroi.nome.toLowerCase().includes(valor.toLowerCase()))
        setListaDeHeroisFiltrados(listaDeHeroisFiltrados)
    }, [valor])

    // Atualiza o estado dos heroisAMostrar
    useEffect(() => {
        if (listaDeHeroisFiltrados !== '') {
            setHeroisAMostrar(listaDeHeroisFiltrados)
        } else {
            setHeroisAMostrar(listaDeHerois)
        }
    }, [listaDeHeroisFiltrados])

    return (

        heroisAMostrar.map(heroi => {
            const aoClicarCarta = (evento) => {
                atualizarDuelo(heroi)
                eventoClique(evento)
            }

            return (
                <LazyLoad key={heroi.id} height={300}>
                    <Carta heroi={heroi} onClick={aoClicarCarta} />
                </LazyLoad>
            )
        })
    )
}

export default Cartas
