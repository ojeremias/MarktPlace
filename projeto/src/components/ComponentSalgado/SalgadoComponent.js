import React, { useState } from "react";
import { Link, useNavigation } from 'react-router-dom'

function SalgadoComponent ({ salgadoProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

    const [den, setDen] = useState(0)
    const [fav, setFav] = useState(0)

    const favoritar = (p) => {
        setFav(fav+1)
        adicionarFavoritos(p)
    }
    const denunciar = (p) => {
        setDen(den+1)
        adicionarDenuciado(p)
    }

    return (
        <div className="box-produto">
            <h1 id="tituloSalgado">Salgados</h1>
            <div id="faden">
                <h2>Salgados Favoritados: {fav}</h2>
                <h2>Salgados Denunciados: {den}</h2>
            </div>
            <Link to='salgados'>Ver mais</Link>
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
                                favoritar(p);
                                console.log(p)
                            }}>Favoritar</button><br/>
                            <button id='btnDenSalgado' onClick={()=>{
                                denunciar(p);
                            }}>Denuciar</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default SalgadoComponent