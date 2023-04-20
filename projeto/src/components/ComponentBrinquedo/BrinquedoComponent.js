import React from "react";

function BrinquedoComponent ({ brinquedoProdutos, adicionarFavoritos, adicionarDenuciado}) {

    return (
        <div className="container-leonardo">
            <h1>Brinquedos - Leonardo </h1> 
            {
                brinquedoProdutos.map(p =>
                    <div key={p.id} className="card-leonardo">
                        <div className="container-leonardo">
                        <h4><b>{p.nome}</b></h4>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1Av.7PVXXXXb5XFXXq6xXFXXXv%2F100-pieces-Wooden-Puzzle-Toy-Cartoon-3D-Wood-Jigsaw-Puzzle-Iron-Box-Package-for-Child-Educational.jpg&f=1&nofb=1&ipt=c4c4fcbdd5285866fcc0f16c232340e8bafaaf58b771d415b4f5663588828337&ipo=images"/>
                        <p>R${p.preco}</p>

                        </div>
                        <div>

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
