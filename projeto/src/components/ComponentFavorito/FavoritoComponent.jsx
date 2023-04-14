import React from "react";

export default function FavoritoComponent({favoritos}){ //o desconstrutor descontroi o objeto

    return(
        <div className="box-favorite">
            <h1>Favorito</h1>
            {
                favoritos.map((produto)=>{
                    return <div>
                        <p>{produto.nome} {produto.valor}</p>
                    </div>
            })}      
        </div>
    )
}