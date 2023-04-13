import React from 'react'

export default function BrinquedoComponent(p) {
    console.log(p)
  return (
    <div>
      {p.brinquedosProduto.map(brinquedo => (
        <p key={brinquedo.id}>{brinquedo.nome}</p>
      ))}
    </div>
  )
}
