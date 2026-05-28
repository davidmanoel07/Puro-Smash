import './contato.css'

function Contato({ voltarHome }) {

  return (
    <section className="contato-container">

      <div className="contato-content">

        <h2>Entre em Contato</h2>

        <p>
          Gostou do projeto da Puro Smash?
          Você pode entrar em contato comigo através das redes abaixo.
        </p>

        <div className="contato-links">

          <a
            href="https://www.linkedin.com/in/david-oliveira0101/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/davidoliver.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-btn"
          >
            Instagram
          </a>

        </div>

        <button
          onClick={voltarHome}
          className="btn-voltar"
        >
          Voltar ao Cardápio
        </button>

      </div>

    </section>
  )
}

export default Contato