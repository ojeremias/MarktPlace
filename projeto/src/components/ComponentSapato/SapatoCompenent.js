import React from 'react'
 function SapatosCompenent({sapatoProdutos,categoria,onAdd, adicionarFavoritos,adicionarDenuciado}) {
    
  return (
    <div className="box-produto">
      <h1>Sapato roberto/clicia</h1>
        {

          sapatoProdutos.map(p => 
            <div key={p.id}>
              {p.nome}
              <div>
              R$:{p.preco}
              </div>
              <button onClick={()=>{
               adicionarFavoritos(p);
                console.log(p)
              }}>Adicionar</button>

              <button onClick={()=>{
                adicionarDenuciado(p);
              }}>Denuciar</button>
              </div>

              )

        }
    </div>
  )
}
export default SapatosCompenent