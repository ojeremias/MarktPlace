
import  { useState } from 'react'
import './InformaticaComponent.css'

import React from 'react'
import styles from './InformaticaComponent.css'




export default function InformaticaComponent({produtos, adicionarFavoritos, adicionarDenuciado}){
  
  const [quantidade, setQuantidade] = useState(0)


  return(

        <div className={styles.containerInformatica}>
        <h1>Setor Informatica (Antonio)</h1>
          <div>
            quantidade : {quantidade}
          </div>
    <div className='telaInformatica'>
      {
          produtos.map(p => 
            <div key={p.id} className={styles.selaInformaticaCard}>
          <div>
          Produto: {p.nome}
          </div>
          <div className={styles.telaInformaticaImg}>
          <img className={styles.img} src={p.img} alt='Img Antonio' ></img>
          </div>
          <div>
            Preço: R${p.preco}
          </div> 
          <div className={styles.button} onClick={()=>{
                            adicionarFavoritos(p);
                           
                            setQuantidade(quantidade+1);
                           

                        }}>Adicionar</div>

                        <div className={styles.button} onClick={()=>{
                            adicionarDenuciado(p);
                        }}>Denuciar</div>
          </div>
        )
    }
    </div>
    </div>
   
        
    )
}