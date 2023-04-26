import React from 'react'
 function MaquiagemCompenent({maquiagemProdutos, adicionarFavoritos,adicionarDenuciado}) {
  
  return (

    <div className="box-produto">
      <h1 id='h1'>Maquiagem-Vitória</h1>
      {
        maquiagemProdutos.map(p =>
          <div key={p.id}>
              <div className="cardInfor">
              Nome:{p.nome}
              R$:{p.preco}

          <div className='jf-tecnologia'>
          <img className='img' src={p.img} ></img>
          </div>

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
export default MaquiagemCompenent

