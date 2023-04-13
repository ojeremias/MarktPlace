import React from "react";

function SalgadoComponent ({ salgadoProdutos, categoria, onAdd}) {

    /**const produtosFiltrado = salgadosProdutos.filter(p => p.categoria === categoria);

    const handleAddProduto = (p) => {
        if (p?.id){
            onAdd (p.id);
        }
    }*/
console.log(salgadoProdutos)
    return (
        <div className="box-produto">
            {
                salgadoProdutos.map(p =>
                    <div key={p.id}>
                        {p.nome}:::{p.valor}
                        <button>Adicionar</button>
                    </div>
                )
            }
        </div>
    )
}

export default SalgadoComponent