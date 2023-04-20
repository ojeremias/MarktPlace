import React from 'react'
import './InformaticaComponent.css'

export default function InformaticaComponent({produtos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}){
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
          <div className='telaInformaticaImg'>
          <img className='img' src={p.img} alt='Img Antonio' ></img>
          </div>
          <div>
            Preço: R${p.preco}
          </div> 
          <div className='button' onClick={()=>{
                            adicionarFavoritos(p);
                            console.log(p)
                        }}>Adicionar</div>

                        <div className='button' onClick={()=>{
                            adicionarDenuciado(p);
                        }}>Denuciar</div>
          </div>
        )
    }
    </div>
    </div>
   
        
    )
}