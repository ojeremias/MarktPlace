import React from "react";

function BrinquedoComponent ({ brinquedoProdutos, adicionarFavoritos, adicionarDenuciado}) {

const img = ['', './img/quebracabeca.jpg', './img/domino.jpg', './img/uno.jpg',];
    return (
        <div className="container-brinquedo">
            <span className="header-brinquedo"><h1>Brinquedos - Leonardo </h1></span> 
            {
                brinquedoProdutos.map(p =>
                    <div key={p.id} className="cards-brinquedo">
                        <div className="card-brinquedo">

                        <div className="imgBrinquedo">
                            <img src={img[p.id]}></img>                        
                        </div>

                        <div className="namePrice">
                            <h3>{p.nome}</h3>
                            <p>R${p.preco}</p>
                        </div>

                        <button onClick={()=>{
                            adicionarFavoritos(p);
                            console.log(p)
                        }}>Adicionar</button>

                        <button onClick={()=>{
                            adicionarDenuciado(p);
                        }}>Denuciar</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BrinquedoComponent
