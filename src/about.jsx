import './about.css'

function About({ voltarHome }) {
  return (
    <section className="about-container">

      <div className="about-hero">

        <h2>Sobre a Puro Smash</h2>

        <p>
          Na Puro Smash, cada hambúrguer é preparado com ingredientes
          selecionados, carnes suculentas e muito sabor.
        </p>

        <p className="about-text">
          Nossa missão é transformar cada pedido em uma experiência única,
          combinando qualidade, rapidez e aquele sabor artesanal que faz
          diferença em cada mordida. Trabalhamos com ingredientes frescos,
          pão macio, molhos especiais e carnes prensadas na chapa para
          entregar o verdadeiro smash burger premium.
        </p>

        <p className="about-text">
          Seja para matar a fome no fim do dia ou curtir um momento especial,
          a Puro Smash foi criada para quem ama hambúrguer de verdade.
        </p>

        <button onClick={voltarHome} className="btn-voltar">
          Voltar ao Cardápio
        </button>

      </div>

      <div className="about-content">

        <div className="about-card">
          <h3>🍔 Qualidade Premium</h3>

          <p>
            Trabalhamos com ingredientes frescos e carnes selecionadas
            para entregar uma experiência única em cada pedido.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 Entrega Rápida</h3>

          <p>
            Nosso objetivo é levar seu lanche quentinho e saboroso
            até você no menor tempo possível.
          </p>
        </div>

        <div className="about-card">
          <h3>🔥 Smash Artesanal</h3>

          <p>
            Cada smash burger é prensado na chapa para criar aquela
            crosta caramelizada irresistível.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About