
import  { useState } from 'react';
// import '../../App.css';
import './InformaticaComponent.css';
import { Link } from 'react-router-dom';


export default function InformaticaComponent({produtos, adicionarFavoritos, adicionarDenuciado}){
  
  const [quantidade, setQuantidade] = useState(0)
  const [quantidade1, setQuantidade1] = useState(0)


  return(

        <div className='containerInformatica' >
        <h1>Setor Informatica (Antonio)</h1>
          <div className='divQuantidades'>
          
            Produtos que foram Adicionados : {quantidade } {' '}
            Produtos que foram denunciados : {quantidade1}
     
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
          <div className="button" onClick={()=>{
                            adicionarFavoritos(p);
                           
                            setQuantidade(quantidade+1);
                           

                        }}>Adicionar</div>

                        <div className="button" onClick={()=>{
                            adicionarDenuciado(p);
                            setQuantidade1(quantidade1+1);
                        }}>Denuciar</div>
          </div>
        )
    }
    </div>
    <h3><Link to="informatica">Clique para ir a página de Informatica do Tonhão</Link></h3>
    </div>
   
        
    )
}