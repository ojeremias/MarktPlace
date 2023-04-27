import React from 'react'

import "./sapatos.css"
function SapatosCompenent({sapatoProdutos,categoria,onAdd, adicionarFavoritos,adicionarDenuciado}) {
  
 return (
   <div className='sapConteiner'>
     <h1>SAPATOS ROBERTO/CLICIA</h1>
   <div className="sapTela">
       {


         sapatoProdutos.map(p =>
           <div key={p.id} className='sapTelaCard'>
           

             

               <div className='sapteladaImg' >
                 <img className='img' src={p.img}></img>
               </div>

              

             <div className='sapTexto' >
             {p.nome}
             </div>


             <div className='sapTexto'>
             R$:{p.preco}
             </div>


            
              <div className='sapBotao' onClick={()=>{
              adicionarFavoritos(p);
               console.log(p)
             }}>Adicionar </div>
             

             
              <div className='sapBotao' onClick={()=>{
               adicionarDenuciado(p);
             }}>Denuciar</div>


             </div>


             


             )


            }
            </div>
   </div>
 )
          }

export default SapatosCompenent
