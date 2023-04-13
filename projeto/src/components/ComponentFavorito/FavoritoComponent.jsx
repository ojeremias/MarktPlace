import React from "react";

export default function FavoritoComponent({favoritos}){ //o desconstrutor descontroi o objeto

    if(favoritos.length === 0){
        return
    }

    console.log();
    return(
        <div>
            <div>
                <p>Produto: {favoritos[0].nome}</p>
            </div>
        <div></div>
        
        </div>
    )
}