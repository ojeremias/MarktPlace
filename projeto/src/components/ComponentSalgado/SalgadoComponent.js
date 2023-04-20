import React from "react";


function SalgadoComponent ({ salgadoProdutos, categoria, onAdd, adicionarFavoritos, adicionarDenuciado}) {

const img = [ '', './img/coxinha.png', './img/miniCoxinha.png', './img/enroladinho.png', './img/pastelDeQueijo.png', './img/pastelDeCarne.png']

    return (
        <div className="box-produto">
            <h1>Salgados</h1>
            {
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

                        <button onClick={()=>{
                            adicionarDenuciado(p);
                        }}>Denuciar</button>
                    </div>
                )
            }
        </div>
    )
}

export default SalgadoComponent
