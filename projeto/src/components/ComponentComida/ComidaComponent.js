import React from 'react'

function  ComidaComponent ({ comidaProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

  return (
    <div className="containerComida">
        <h1 id='h1'>Comida - Felipe</h1>
        {
            comidaProdutos.map(p =>
                <div key={p.id} className="containerProduto" >
                    
                    <div id='nome' >{p.nome}</div>
                    
                <div>
                    <img src="" alt ='comida'></img>
                    </div>
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
            )
        }
    </div>
)
}

export default ComidaComponent
