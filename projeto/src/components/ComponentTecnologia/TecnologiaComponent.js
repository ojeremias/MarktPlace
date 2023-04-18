import React from "react";

function TecnologiaComponent ({ tecnologiaProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

    /**const produtosFiltrado = salgadosProdutos.filter(p => p.categoria === categoria);

    const handleAddProduto = (p) => {
        if (p?.id){
            onAdd (p.id);
        }
    }*/

    return (
        <div className="box-produto">
            <h1>Tecnologia - Jeallyson</h1>
            {
                tecnologiaProdutos.map(p =>
                    <div key={p.id}>
                        {p.nome} R${p.valor}
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

export default TecnologiaComponent