import React from "react";


function SalgadoComponent ({ salgadoProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {


    return (
        <div className="box-produto">
            <h1 id="tituloSalgado">Salgados</h1>
            <table>
                <tbody>
                    <tr>{
                        salgadoProdutos.map(p =>
                            <td key={p.id}>
                    <div id="cardSalgado" >
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
                    </td>
                )
            }</tr>
            </tbody>
            </table>
        </div>
    )
}

export default SalgadoComponent