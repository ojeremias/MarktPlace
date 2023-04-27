import React from 'react'
import styles from './InformaticaComponent.css'

export default function InformaticaComponent({produtos, adicionarFavoritos, adicionarDenuciado}){
    return(

        <div className={styles.containerInformatica}>
        <h1>Setor Informatica (Antonio)</h1>
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