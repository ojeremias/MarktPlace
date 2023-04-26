import React from "react";


function SalgadoComponent ({ salgadoProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {


    return (
        <div className="box-produto">
            <h1 id="tituloSalgado">Salgados</h1>
            <table>
                <tr>{
                    salgadoProdutos.map(p =>
                    <div key={p.id}>
                        {p.nome}<br/>
                    <div>
                    <img src={img[p.id]} height={100} width={100}></img>
                    </div>
                        {p.valor}<br/>
                        <button onClick={()=>{
                            adicionarFavoritos(p);
                            console.log(p)
                        }}>Adicionar</button><br/>

                        <button id='btnDenSalgado' onClick={()=>{
                            adicionarDenuciado(p);
                        }}>Denuciar</button>
                    </div>
                )
                }</tr>
            </table>
        </div>
    )
}

export default SalgadoComponent
