import React from "react";

export default function DenuciadoComponent({denuciado}){

    return( 
        <div>
            <h1>Denunciados!</h1>
            {
                denuciado.map((produto) =>{
                    return <div>
                        <p>{produto.nome} {produto.valor}</p>    
                    </div>
                })
            }
        </div>
    )
}