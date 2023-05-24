import React from "react";
import { useNavigate } from "react-router-dom";
export default function FavoritoComponent({favoritos}){ //o desconstrutor descontroi o objeto

const navigate = useNavigate()

    function navegecao(produto){
        navigate("./visualizarproduto", {state: {fav: produto}})
    }

    return(
        <div className="box-favorite">
            <h1 className="titulo-favorito">Favorito!</h1>
            {
                favoritos.map((produto)=>{
                    console.log(produto)
                    return(
                    <div key={produto.id}>
                        <p>{produto.nome} {produto.valor}</p>
                     <img src={produto.img} alt="imgDoProduto" />
                     <button onClick={() =>{
                        navegecao(produto)
                     }}>Visualizar produto</button>
                    </div>
                    ) 
            })}      
        </div>
    )
}