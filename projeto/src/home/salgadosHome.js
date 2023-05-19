import React, { useEffect } from "react";


function SalgadosHome ({ salgadoProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

    useEffect(() => {

    });

    return (
        <div className="box-produto">
            {/* <h1 id="tituloSalgado">Salgados</h1>
            <h2>Favoritados () Denunciado ()</h2>
            <div id="carrosselSalgado">
                {
                    salgadoProdutos.map(p =>
                        <div id="cardSalgado" key={p.id}> 
                            {p.nome}<br/>
                            <div>
                                <img id='imgSalgado' src={[p.img]}></img>
                            </div>
                            {p.valor}<br/>
                            <button id='btnFavSalgado' onClick={()=>{
                                adicionarFavoritos(p);
                                console.log(p)
                            }}>Favoritar</button><br/>
                            <button id='btnDenSalgado' onClick={()=>{
                                adicionarDenuciado(p);
                            }}>Denuciar</button>
                        </div>
                    )
                }
            </div> */}
            <h1>FOI?</h1>
        </div>
    )
}

export default SalgadosHome