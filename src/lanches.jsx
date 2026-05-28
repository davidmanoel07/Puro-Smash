import './index.css'
import './lanches.css'

// Imagens dos Lanches
import HamburguerPuroSmash from './Imagens/Hamburguer-Puro-Smash.png'
import SmashSimples from './Imagens/Smash-Simples.png'
import SmashEspecial from './Imagens/Smash-Especial.png'
import SelClassico from './Imagens/Sel-Classico.png'
import SelSignature from './Imagens/Sel-Signature.png'
import BrutoBacon from './Imagens/Bruto-bacon.png'
import FogoCheddar from './Imagens/Fogo-Cheddar.png'
import FogoDaCasa from './Imagens/Fogo-da-Casa.png'
import SmashNobre from './Imagens/Smash-Nobre.png'
import BrutoCheddar from './Imagens/Bruto-Cheddar.png'
import FogoDuplo from './Imagens/Cheddar-Duplo-bacon.png'
import SelBacon from './Imagens/Sel-Artesanal.png'

// Imagens das Bebidas
import AguaComGas from './Imagens/Água-Com-Gás.png'
import AguaMineral from './Imagens/Água-Mineral.png'
import CocaLata from './Imagens/Coca-Lata.png'
import CocaZeroLata from './Imagens/Coca-Zero-Lata.png'
import FantaLata from './Imagens/Fanta-Lata.png'
import FantaUvaLata from './Imagens/Fanta-Uva-Lata.png'
import GuaranaLata from './Imagens/Guarana-Antarctica-Lata.png'
import PepsiLata from './Imagens/Pepsi-Lata.png'
import SpriteLata from './Imagens/Sprite-Lata.png'


import SucoLaranja from './Imagens/Suco-de-Laranja.png'
import SucoAcerola from './Imagens/Suco-de-Acerola.png'
import SucoGraviola from './Imagens/Suco-de-Graviola.png'

// Novo ícone para a sacola
import AdicionarSacola from './Imagens/adicionar-a-sacola.png'

function Lanches({ adicionarAoCarrinho, setPaginaAtual }){ // Recebendo as funções via props

  const sanduiches = [
    { id: 1,  nome: "Hamburguer Puro Smash", preco: "R$ 37,50", imagem: HamburguerPuroSmash },
    { id: 2,  nome: "Smash Simples",         preco: "R$ 32,00", imagem: SmashSimples },
    { id: 3,  nome: "Smash Especial",        preco: "R$ 52,00", imagem: SmashEspecial },
    { id: 4,  nome: "Sel Clássico",          preco: "R$ 28,00", imagem: SelClassico },
    { id: 5,  nome: "Sel Signature",         preco: "R$ 55,00", imagem: SelSignature },
    { id: 6,  nome: "Bruto Bacon",           preco: "R$ 44,00", imagem: BrutoBacon },
    { id: 7,  nome: "Fogo Cheddar",          preco: "R$ 37,00", imagem: FogoCheddar },
    { id: 8,  nome: "Fogo da Casa",          preco: "R$ 48,00", imagem: FogoDaCasa },
    { id: 9,  nome: "Smash Nobre",           preco: "R$ 46,00", imagem: SmashNobre },
    { id: 10, nome: "Bruto Cheddar",         preco: "R$ 41,00", imagem: BrutoCheddar },
    { id: 11, nome: "Cheddar Duplo Bacon",   preco: "R$ 43,00", imagem: FogoDuplo },
    { id: 12, nome: "Sel Bacon",             preco: "R$ 38,00", imagem: SelBacon },
  ]

 const bebidas = [
    { id: 1, nome: "Pepsi em Lata",          preco: "R$ 3,50", imagem: PepsiLata },
    { id: 2, nome: "Coca-Cola em Lata",       preco: "R$ 7,00", imagem: CocaLata },
    { id: 3, nome: "Coca-Cola Zero em Lata",  preco: "R$ 6,00", imagem: CocaZeroLata },
    { id: 4, nome: "Fanta em Lata",           preco: "R$ 3,50", imagem: FantaLata },
    { id: 5, nome: "Sprite em Lata",          preco: "R$ 4,50", imagem: SpriteLata },
    { id: 6, nome: "Fanta Uva em Lata",       preco: "R$ 3,50", imagem: FantaUvaLata },
    { id: 7, nome: "Guaraná Antarctica",      preco: "R$ 3,50", imagem: GuaranaLata },
    { id: 8, nome: "Água Mineral 500ml",      preco: "R$ 3,00", imagem: AguaMineral },
    { id: 9, nome: "Água Com Gás 500ml",      preco: "R$ 3,50", imagem: AguaComGas },
    // 3 Novos Sucos adicionados aqui:
    { id: 10, nome: "Suco de Laranja (Garrafa)", preco: "R$ 8,00", imagem: SucoLaranja },
    { id: 11, nome: "Suco de Acerola (Garrafa)", preco: "R$ 8,00", imagem: SucoAcerola },
    { id: 12, nome: "Suco de Graviola (Garrafa)",         preco: "R$ 7,50", imagem: SucoGraviola },
  ]

  // Função auxiliar para o botão "Comprar" (Adiciona e já abre a sacola)
  const acaoComprar = (item) => {
    adicionarAoCarrinho(item);
    setPaginaAtual('sacola');
  }

  return(
    <main>
      <h2>Nossos Sanduíches</h2>
      <div className="cards-container">
        {sanduiches.map(item => (
          <div key={item.id} className="card">
            <img src={item.imagem} alt={item.nome} className="card-img" />
            <p className="card-nome">{item.nome}</p>
            <p className="card-preco">{item.preco}</p>
            
            <div className="card-actions">
              <button className="btn-comprar" onClick={() => acaoComprar(item)}>Comprar</button>
              <button 
                className="btn-sacola" 
                title="Adicionar à sacola"
                onClick={() => adicionarAoCarrinho(item)}
              >
                <img src={AdicionarSacola} alt="Adicionar à sacola" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className='bebidas'>Nossas Bebidas</h2>
      <div className="cards-container">
        {bebidas.map(item => (
          <div key={item.id} className="card">
            <img src={item.imagem} alt={item.nome} className="card-img" />
            <p className="card-nome">{item.nome}</p>
            <p className="card-preco">{item.preco}</p>
            
            <div className="card-actions">
              <button className="btn-comprar" onClick={() => acaoComprar(item)}>Comprar</button>
              <button 
                className="btn-sacola" 
                title="Adicionar à sacola"
                onClick={() => adicionarAoCarrinho(item)}
              >
                <img src={AdicionarSacola} alt="Adicionar à sacola" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Lanches