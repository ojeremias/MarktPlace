import React from 'react'
export default function MaquiagemCompenent(props) {
    console.log(props)
  return (
    <div class="">
        {props.maquiagemProdutos[0].nome}, {props.maquiagemProdutos[1].nome}, {props.maquiagemProdutos[2].nome}
    </div>
  )
}
