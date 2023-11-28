import { createContext, useContext, useState } from "react";

const FiltroHerois = createContext()

const FiltroHeroisProvider = ({ children }) => {
    const [valor, setValor] = useState('')

    const atualizarValor = novoValor => {
        setValor(novoValor)
    }

    return (
        <FiltroHerois.Provider value={{ valor, atualizarValor }}>
            {children}
        </FiltroHerois.Provider>
    )
}

const useFiltroHerois = () => useContext(FiltroHerois)

export { FiltroHeroisProvider, useFiltroHerois }