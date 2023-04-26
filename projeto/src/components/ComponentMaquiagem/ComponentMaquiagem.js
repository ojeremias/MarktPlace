import React from 'react'
 function MaquiagemCompenent({maquiagemProdutos, adicionarFavoritos,adicionarDenuciado}) {
  
  return (

    <div className="box-produto">
      <h1 id='h1'>Maquiagem - Vitória</h1>
      <div className="maqTela">
      {
        maquiagemProdutos.map(p =>
          <div key={p.id} className="maqTela">

            <div className='maqtelaImg'>
              <img className='img' src={p.img}></img>
              </div>


              <div className='cardInfor'>
               {p.nome}
              </div>

              <div className='cardInfor'>
              R$ {p.preco}
              </div>

              <button className='maqBotao' onClick={()=>{
                adicionarFavoritos(p);
                console.log(p)
              }}>Adicionar</button>

             <button className='maqBotao' onClick={()=>{
                adicionarDenuciado(p);
              }}>Denuciar</button>
              </div>
        )
      }
       
    </div>
      </div>
      
  )
}
export default MaquiagemCompenent

