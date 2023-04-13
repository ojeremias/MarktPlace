import React from 'react'

export default function ComidaComponent(props) {

    if(props.comidaProdutos === 0){
        return
    }
  
  return (

    <div>
      {
        props.comidaProdutos[0].nome
      }
      <br></br>
      {
        props.comidaProdutos[1].nome
      }
      <br></br>
      {
        props.comidaProdutos[2].nome
      }
      <br></br>

    </div>
 
  )
}
