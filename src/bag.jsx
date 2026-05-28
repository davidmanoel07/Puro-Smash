import './bag.css'

function Bag({ itens, alterarQuantidade, removerDoCarrinho, voltarHome }) {
  
  // Função auxiliar para converter a string "R$ 37,50" em número real (37.50)
  const converterPreco = (precoString) => {
    return parseFloat(precoString.replace('R$', '').replace(',', '.').trim())
  }

  // Calcula o valor total do carrinho
  const valorTotal = itens.reduce((total, item) => {
    return total + converterPreco(item.preco) * item.quantidade
  }, 0)

  // Função para enviar o pedido direto para o WhatsApp (opcional, mas muito útil para hamburguerias!)
  const enviarPedidoWhatsApp = () => {
    let mensagem = `*Novo Pedido - Puro Smash*\n\n`;
    itens.forEach(item => {
      mensagem += `• ${item.quantidade}x ${item.nome} (${item.preco} cada)\n`;
    });
    mensagem += `\n*Total: R$ ${valorTotal.toFixed(2).replace('.', ',')}*`;
    
    const url = `https://api.whatsapp.com/send?phone=5581989040712&text=${encodeURIComponent(mensagem)}`;
window.open(url, '_blank');
  }

  return (
    <section className="bag-container">
      <div className="bag-content">
        <h2>Sua Sacola</h2>

        {itens.length === 0 ? (
          <div className="bag-vazia">
            <p>Sua sacola está vazia. Que tal adicionar um smash suculento?</p>
            <button onClick={voltarHome} className="btn-voltar-cardapio">
              Ver Cardápio
            </button>
          </div>
        ) : (
          <>
            <div className="bag-itens-lista">
              {itens.map((item) => (
                <div key={`${item.id}-${item.nome}`} className="bag-item">
                  <img src={item.imagem} alt={item.nome} className="bag-item-img" />
                  
                  <div className="bag-item-info">
                    <h3>{item.nome}</h3>
                    <p className="bag-item-preco">{item.preco}</p>
                  </div>

                  <div className="bag-item-quantidade">
                    <button 
                      onClick={() => alterarQuantidade(item.id, item.nome, item.quantidade - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantidade}</span>
                    <button 
                      onClick={() => alterarQuantidade(item.id, item.nome, item.quantidade + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button 
                    className="btn-remover" 
                    onClick={() => removerDoCarrinho(item.id, item.nome)}
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            <div className="bag-resumo">
              <div className="total-container">
                <span>Total:</span>
                <span className="total-valor">
                  R$ {valorTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <div className="bag-botoes-acoes">
                <button onClick={voltarHome} className="btn-continuar-comprando">
                  Continuar Comprando
                </button>
                <button onClick={enviarPedidoWhatsApp} className="btn-finalizar-pedido">
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Bag