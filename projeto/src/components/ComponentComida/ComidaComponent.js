import React from 'react'

function  ComidaComponent ({ comidaProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

const img = ["", "./img/batata frita.jpg", "./img/sanduiche.jpg", "./img/lasanha.jpg", "./img/pizza.jpg", "./img/cachorro-quente.png", "./img/tacos.jpg", "./img/nachos.png", "./img/burritos.jpg"]

  return (
    <div>

        <h1 id='h1'>Comida - Felipe</h1>
    <div className="containerComida">
        {
            comidaProdutos.map(p =>
                <div key={p.id} className="containerProduto" >
                <div className='card'>
                    
                    <div id='nome' >
                        {p.nome}
                    
                    </div>
                    
                    <img src={img[p.id]} alt ='comida'></img>
                    <div id='preco'>
                    Preço: R${p.preco}
                    </div>

                    <button id ='btnadd' onClick={()=>{
                        adicionarFavoritos(p);
                        console.log(p)
                    }}>Adicionar</button>

                    <button id='btnden' onClick={()=>{
                        adicionarDenuciado(p);
                    }}>Denuciar</button>
                </div>
                    </div>
            )
        }
    </div>
    </div>

)
}

export default ComidaComponent
