import './App.css'
import './index.css'

import { useState } from 'react'

import Banner from './Imagens/Banner-do-site.png'

import Lanches from './lanches'
import About from './About'
import Contato from './Contato'


function App() {

  const [paginaAtual, setPaginaAtual] = useState('home')

  return (
    <div>

      <header>

        <h1>Puro Smash</h1>

        <nav>
          <ul>

            <li>
              <a
                href="#"
                onClick={() => setPaginaAtual('sobre')}
              >
                Sobre
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setPaginaAtual('contato')}
              >
                Contato
              </a>
            </li>

            <li>
              <a href="#">
                Minha Sacola
              </a>
            </li>

          </ul>
        </nav>

      </header>

      {paginaAtual === 'home' && (
        <>
          <img
            src={Banner}
            alt="Hamburguer"
            className="banner"
          />

          <Lanches />
        </>
      )}

      {paginaAtual === 'sobre' && (
        <About voltarHome={() => setPaginaAtual('home')} />
      )}

      {paginaAtual === 'contato' && (
        <Contato voltarHome={() => setPaginaAtual('home')} />
      )}

    </div>
  )
}

export default App