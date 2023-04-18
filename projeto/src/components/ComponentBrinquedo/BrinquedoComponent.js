import React from "react";

function BrinquedoComponent ({ brinquedoProdutos, adicionarFavoritos, adicionarDenuciado}) {

    return (
        <div className="box-produto">
            <h1>Brinquedos - Leonardo</h1>
            {
                brinquedoProdutos.map(p =>
                    <div key={p.id}>
                        {p.nome} R${p.preco}
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

export default BrinquedoComponent
