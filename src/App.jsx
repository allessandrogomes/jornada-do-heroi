import "normalize.css"
import "/src/index.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ContainerPrincipal from "./components/ContainerPrincipal";
import ContainerConteudo from "./components/ContainerPrincipal/ContainerConteudo";
import ContainerCartas from "./components/ContainerPrincipal/ContainerConteudo/ContainerCartas";
import Cartas from "./components/ContainerPrincipal/ContainerConteudo/ContainerCartas/Cartas";
import { FiltroHeroisProvider } from "./context/FiltroHeroi";
import { DueloHeroisProvider } from "./context/Duelo";
import { useState } from "react";
import MenuResponsivo from "./components/ContainerPrincipal/MenuResponsivo";
import ModalDuelo from "./components/ContainerPrincipal/ModalDuelo";


function App() {

  const [eventoClique, setEventoClique] = useState()
  const [modalFechada, setModalFechada] = useState()

  return (
    <ContainerPrincipal>
      <FiltroHeroisProvider>
        <DueloHeroisProvider>
          <MenuResponsivo />
          <ContainerConteudo>
            <ContainerCartas>
              <Cartas eventoClique={(evento) => setEventoClique(evento)} />
            </ContainerCartas>
          </ContainerConteudo>
          <ModalDuelo eventoClique={eventoClique} modalFechada={(evento) => setModalFechada(evento)} />
        </DueloHeroisProvider>
      </FiltroHeroisProvider>
    </ContainerPrincipal >
  )
}

export default App
