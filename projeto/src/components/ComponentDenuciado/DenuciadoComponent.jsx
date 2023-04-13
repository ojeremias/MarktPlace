import React from "react";

export default function DenunciadoComponent({denunciado}){
    if(denunciado.length === 0){
        return
    }

    console.log();
    return( 
        <div>
            <div>
                <p>Produto: {denunciado[0].nome}</p>
            </div>
        </div>
    )
}