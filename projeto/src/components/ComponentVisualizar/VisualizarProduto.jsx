import React from 'react'
import {useLocation} from 'react-router-dom' 

export default function VisualizarProduto() {

    const location = useLocation()
    console.log(location)
  return (
    <div className='box-adicionar'>
        <h1>Faz o L</h1>
        <div className='descricaoProduto'>
            <div className='nomeProduto'>
                <p>Nome do produto: {location.state.fav.nome}</p>
            </div>
            <div className='precoProduto'>
                <p>Preço: R$ {location.state.fav.preco}</p>
            </div>
            <div>
                <img src={location.state.fav.img} alt="imagem do produto" />
            </div>
        </div>
    </div>
  )
}
