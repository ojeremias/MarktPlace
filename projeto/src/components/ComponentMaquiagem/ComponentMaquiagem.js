import React, { useState, useEffect} from 'react'
import './maquiagem.css'
function MaquiagemCompenent({maquiagemProdutos, adicionarFavoritos,adicionarDenuciado}) {

  const [countFavoritosMaquiagem, setCountFavoritosMaquiagem] = useState(0);
  const [produtos, setprodutos] = useState([]);
  const [ordem, setOrdem] = useState('preco')
  const handleAddFavorito = (p) => {
    setCountFavoritosMaquiagem(countFavoritosMaquiagem+1);
    adicionarFavoritos(p);
  
  };
console.log(maquiagemProdutos);
 
useEffect(() => {
  console.log('tentei');
  const load = async () => {
    const response = await (await fetch('https://dummyjson.com/products/category/skincare')).json()
    setprodutos(response.products)
  }
  load();
}, []);

  return (

    <div className="box-produto">
      <h1 id='h1'>Maquiagem - Vitória <small>({countFavoritosMaquiagem})</small></h1>
      <select onChange={(op) => setOrdem(op.target.value)}>
          <option value='preco'>Preço</option>
          <option value='estoque'>Estoque</option>
          <option value='avaliacao'>Avaliação</option>
        </select>
      <div className="maqContainer">
        
      
      {
        
        produtos.map(p =>

          
          <div key={p.id} className="maqItem">

            <div className='maqtelaImg'>
            <img className='img' src={p.thumbnail
}></img>
              </div>


              <div className='cardInfor textColor'>
               {p.title
}
              </div>

              <div className='cardInfor textColor'>
              R$ {p.price}
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

