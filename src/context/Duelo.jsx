import { createContext, useContext, useState } from "react"

const DueloHerois = createContext()

const DueloHeroisProvider = ({ children }) => {
    const [duelo, setDuelo] = useState({
        heroiUm: '',
        heroiDois: ''
    })

    const atualizarDuelo = novoHeroi => {
        const novoDuelo = duelo

        function heroiExiste(objetoPai, novoObjeto) {
            for (let propriedade in objetoPai) {
                if (
                    objetoPai.hasOwnProperty(propriedade) &&
                    JSON.stringify(objetoPai[propriedade]) === JSON.stringify(novoObjeto)
                ) {
                    return true
                }
            }
            return false
        }

        if (novoDuelo.heroiUm === '') {
            novoHeroi.selecionado = true
            novoDuelo.heroiUm = novoHeroi
        } else {
            if (heroiExiste(novoDuelo, novoHeroi)) {
                novoHeroi.selecionado = false
                novoDuelo.heroiUm = ''
            } else {
                novoHeroi.selecionado = true
                novoDuelo.heroiDois = novoHeroi
            }
        }
        setDuelo(novoDuelo)
    }

    return (
        <DueloHerois.Provider value={{ duelo, atualizarDuelo }}>
            {children}
        </DueloHerois.Provider>
    )
}

const useDueloHerois = () => useContext(DueloHerois)

export { DueloHeroisProvider, useDueloHerois }