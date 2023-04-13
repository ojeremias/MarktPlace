import React from 'react'
export default function SapatosCompenent(props) {
    console.log(props)
  return (
    <div class="">
        {props.sapatoProdutos[0].nome}
    </div>
  )
}
