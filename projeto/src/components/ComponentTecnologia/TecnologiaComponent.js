import React from "react";

function TecnologiaComponent ({ tecnologiaProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

    const img = ["", "./img/fone.jpg", "./img/positivo.jpg", "./img/gabinete.jpg", "./img/impressora_3d.jpg", "./img/arduino.jpg"]
    /**const produtosFiltrado = salgadosProdutos.filter(p => p.categoria === categoria);

    const handleAddProduto = (p) => {
        if (p?.id){
            onAdd (p.id);
        }
    }*/

    return (
        <div className="box-produto">
            <h1>Tecnologia - Jeallyson</h1>

            <div className="tecnologia">
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

            <div>
                <img src={img[p.id]} alt ='tecnologia' id="img-tecnologia"></img>
            </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default TecnologiaComponent