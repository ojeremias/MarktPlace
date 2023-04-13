import React from 'react'

export default function ComidaComponent({comidaProdutos}) {
  return (
    <div>
        <div>
            <p>Nome: {comidaProdutos[0].nome}</p>
            <p>Valor: {comidaProdutos[0].preco}</p>
            <button onClick={() =>{
                
           }
            }>Enviar</button>
        </div>
    </div>
 
  )
}
