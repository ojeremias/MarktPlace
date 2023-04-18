import React from 'react'


export default function InformaticaComponent({produtos, categoria, onAdd}){
    return(

        <div className='containerInformatica'>
        <h1>Setor Informatica (Antonio)</h1>
    <div className='telaInformatica'>
      {
          produtos.map(p => 
            <div key={p.id} className='telaInformaticaCard'>
          <div>
          Produto: {p.nome}
          </div>
          <div>
         <img src='' alt='Img Antonio'></img>
          </div>
          <div>
            Preço: R${p.preco}
          </div> 

          </div>
        )
    }
    </div>
    </div>
   
        
    )
}