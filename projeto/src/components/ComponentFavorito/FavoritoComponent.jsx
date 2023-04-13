import React from "react";

export default function FavoritoComponent({favoritos}){ //o desconstrutor descontroi o objeto

    if(favoritos.length === 0){
        return
    }

    return(
        <div>
            {favoritos.map((produto)=>{
                return <div>
                    <p>{produto.nome}</p>
                </div>
            })}

        
        </div>
    )
}