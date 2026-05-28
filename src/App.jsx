import './App.css'
import './index.css'

import { useState } from 'react'

import Banner from './Imagens/Banner-do-site.png'

import Lanches from './lanches'
import About from './About'
import Contato from './Contato'
import Bag from './bag'

function App() {
  const [paginaAtual, setPaginaAtual] = useState('home')
  const [sacola, setSacola] = useState([])
  
  // NOVOS ESTADOS: Para gerenciar o aviso visual
  const [aviso, setAviso] = useState('')
  const [mostrarAviso, setMostrarAviso] = useState(false)

  // Função para adicionar item à sacola
  const adicionarAoCarrinho = (produto) => {
    setSacola((itensAtuais) => {
      const itemExiste = itensAtuais.find((item) => item.id === produto.id && item.nome === produto.nome)

      if (itemExiste) {
        return itensAtuais.map((item) =>
          item.id === produto.id && item.nome === produto.nome
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      }
      return [...itensAtuais, { ...produto, quantidade: 1 }]
    })

    // LÓGICA DO AVISO: Ativa a notificação flutuante
    setAviso(`${produto.nome} adicionado à sacola! 🍔`)
    setMostrarAviso(true)

    // Some com o aviso automaticamente após 3 segundos
    setTimeout(() => {
      setMostrarAviso(false)
    }, 3000)
  }

  const alterarQuantidade = (id, nome, quantidade) => {
    if (quantidade <= 0) {
      setSacola((itens) => itens.filter((item) => !(item.id === id && item.nome === nome)))
    } else {
      setSacola((itens) =>
        itens.map((item) => (item.id === id && item.nome === nome ? { ...item, quantidade } : item))
      )
    }
  }

  const removerDoCarrinho = (id, nome) => {
    setSacola((itens) => itens.filter((item) => !(item.id === id && item.nome === nome)))
  }

  const totalItensSacola = sacola.reduce((total, item) => total + item.quantidade, 0)

  return (
    <div>
      {/* RENDERIZAÇÃO DO AVISO FLUTUANTE */}
      {mostrarAviso && (
        <div className="toast-aviso">
          {aviso}
        </div>
      )}

      <header>
        <h1 onClick={() => setPaginaAtual('home')} style={{ cursor: 'pointer' }}>
          Puro Smash
        </h1>

        <nav>
          <ul>
            <li>
              <a href="#" onClick={() => setPaginaAtual('sobre')}>
                Sobre
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setPaginaAtual('contato')}>
                Contato
              </a>
            </li>

            <li>
              <a href="#" onClick={() => setPaginaAtual('sacola')} className="nav-sacola">
                Minha Sacola {totalItensSacola > 0 && <span className="badge-sacola">{totalItensSacola}</span>}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {paginaAtual === 'home' && (
        <>
          <img src={Banner} alt="Hamburguer" className="banner" />
          <Lanches adicionarAoCarrinho={adicionarAoCarrinho} setPaginaAtual={setPaginaAtual} />
        </>
      )}

      {paginaAtual === 'sobre' && <About voltarHome={() => setPaginaAtual('home')} />}

      {paginaAtual === 'contato' && <Contato voltarHome={() => setPaginaAtual('home')} />}

      {paginaAtual === 'sacola' && (
        <Bag
          itens={sacola}
          alterarQuantidade={alterarQuantidade}
          removerDoCarrinho={removerDoCarrinho}
          voltarHome={() => setPaginaAtual('home')}
        />
      )}
    </div>
  )
}

export default App