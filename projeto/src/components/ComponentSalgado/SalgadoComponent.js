import React from "react";

function SalgadoComponent ({ salgadoProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

    /**const produtosFiltrado = salgadosProdutos.filter(p => p.categoria === categoria);

    const handleAddProduto = (p) => {
        if (p?.id){
            onAdd (p.id);
        }
    }*/

    return (
        <div className="box-produto">
            <h1>Salgados</h1>
            {
                salgadoProdutos.map(p =>
                    <div key={p.id}>
                        {p.nome}{p.valor}
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

export default SalgadoComponent