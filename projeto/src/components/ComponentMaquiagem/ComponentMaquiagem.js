import React, { useState } from 'react'
import './maquiagem.css'
function MaquiagemCompenent({maquiagemProdutos, adicionarFavoritos,adicionarDenuciado}) {

  const [countFavoritosMaquiagem, setCountFavoritosMaquiagem] = useState(0);
  
  const handleAddFavorito = (p) => {
    setCountFavoritosMaquiagem(countFavoritosMaquiagem+1);
    adicionarFavoritos(p);
  };
console.log(maquiagemProdutos);
 
  
  return (

    <div className="box-produto">
      <h1 id='h1'>Maquiagem - Vitória <small>({countFavoritosMaquiagem})</small></h1>
      <div className="maqContainer">
      {
        
        maquiagemProdutos.map(p =>

          
          <div key={p.id} className="maqItem">

            <div className='maqtelaImg'>
            <img className='img' src={p.img}></img>
              </div>


              <div className='cardInfor textColor'>
               {p.nome}
              </div>

              <div className='cardInfor textColor'>
              R$ {p.preco}
              </div>

              <button className='maqBotao' onClick={()=> handleAddFavorito(p)}>Adicionar</button>

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

