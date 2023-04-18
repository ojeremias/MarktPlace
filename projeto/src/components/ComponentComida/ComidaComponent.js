import React from 'react'

function  ComidaComponent ({ comidaProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

  return (
    <div className="box-produto">
        <h1>Comida - Felipe</h1>
        {
            comidaProdutos.map(p =>
                <div key={p.id}>
                    {p.nome} 
                    <div>
                    Preço: R${p.preco}
                    </div>
                    <button onClick={()=>{
                        adicionarFavoritos(p);
                        console.log(p)
                    }}>Adicionar</button>

                    <button onClick={()=>{
                        adicionarDenuciado(p);
                    }}>Denuciar</button>
                </div>
            )
        }
    </div>
)
}

export default ComidaComponent
