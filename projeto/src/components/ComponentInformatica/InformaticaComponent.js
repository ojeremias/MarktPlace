
import  { useState } from 'react';
// import '../../App.css';
import './InformaticaComponent.css';



export default function InformaticaComponent({produtos, adicionarFavoritos, adicionarDenuciado}){
  
  const [quantidade, setQuantidade] = useState(0)


  return(

        <div className='containerInformatica' >
        <h1>Setor Informatica (Antonio)</h1>
          <div>
            quantidade : {quantidade}
          </div>
    <div className='telaInformatica'>
      {
          produtos.map(p => 
            <div key={p.id} className="telaInformaticaCard">
          
          <div>
          Produto: {p.nome}
          </div>
          <div className='telaInformaticaImg'>
          <img className='img' src={p.img} alt='Img Antonio' ></img>
          </div>
          <div>
            Preço: R${p.preco}
          </div> 
          <div className='.button' onClick={()=>{
                            adicionarFavoritos(p);
                           
                            setQuantidade(quantidade+1);
                           

                        }}>Adicionar</div>

                        <div className='.button' onClick={()=>{
                            adicionarDenuciado(p);
                        }}>Denuciar</div>
          </div>
        )
    }
    </div>
    </div>
   
        
    )
}