import React, { useState } from 'react'

import "./sapatos.css"
function SapatosCompenent({sapatoProdutos,categoria,onAdd,roandAdd, adicionarFavoritos,adicionarDenuciado}) {
const[sapContar,setSapcontar]  = useState(0);

function quantFavSaoContar(){
  setSapcontar(sapContar +1)
}

 return (
   <div className='sapConteiner'>
     <h1>SAPATOS ROBERTO/CLICIA</h1>
     <span> Sapatos adicionado <b>favoritados</b>:{sapContar}</span>
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
              quantFavSaoContar();
              
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
