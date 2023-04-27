import React from 'react'
<<<<<<< Updated upstream
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
=======
import "./sapatos.css" 
 function SapatosCompenent({sapatoProdutos,categoria,onAdd, adicionarFavoritos,adicionarDenuciado}) {
    
  return (
    <div>
      <h1>SAPATOS ROBERTO/CLICIA</h1>
    <div className="sapConteiner">
        {

          sapatoProdutos.map(p => 
            <div key={p.id}>
              <div className="SapInfor">
              
              <div>

                <div>
                  <img src='54'></img>
                </div>

              <div className='sapTexto'>
              Nome:{p.nome}
              </div>

              <div className='sapTexto'>
              R$:{p.preco}
              </div>

              </div>

              <div>
              <button id='sapBotao' onClick={()=>{
               adicionarFavoritos(p);
                console.log(p)
              }}>Adicionar</button>

              <button id='sapBotao' onClick={()=>{
                adicionarDenuciado(p);
              }}>Denuciar</button>
              </div>


              </div>

              </div>

              )

        }
    </div>
    </div>
  )
>>>>>>> Stashed changes
}
export default SapatosCompenent
