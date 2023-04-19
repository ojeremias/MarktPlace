import React from "react";

export default function DenuciadoComponent({denuciado}){

    return( 
        <div className="box-denunciados">
            <h1 className="titulo-denunciados">Denunciados!</h1>
            {
                denuciado.map((produto) =>{
                    return <div key={produto.id}>
                        <p>{produto.nome} {produto.valor}</p>    
                    </div>
                })
            }
        </div>
    )
}