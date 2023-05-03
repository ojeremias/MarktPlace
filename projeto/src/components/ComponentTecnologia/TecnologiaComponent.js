import React, { useState } from 'react'

function TecnologiaComponent ({ tecnologiaProdutos, adicionarFavoritos, adicionarDenuciado}) {

    const img = ["", "./img/fone.jpg", "./img/positivo.jpg", "./img/gabinete.jpg", "./img/impressora_3d.jpg", "./img/arduino.jpg"]

    const [countFavoritosTecnologia, setCountFavoritosTecnologia] = useState(0);
  
    // lista de favoritos
    const handleAddFavorito = (p) => {
      setCountFavoritosTecnologia(countFavoritosTecnologia+1);
      adicionarFavoritos(p);
    };

    // lista de denunciados
    const [countDenunciadosTecnologia, setCountDenunciadoTecnologia] = useState(0);
  
    const handleAddDenunciado = (p) => {
        setCountDenunciadoTecnologia(countDenunciadosTecnologia+1);
        adicionarDenuciado(p);
    };
    


    return (
        <div className="box-produto">
            <h1>Tecnologia - Jeallyson</h1>
            <h1><small>Favoritos: ({countFavoritosTecnologia})</small> <small>Denunciados: ({countDenunciadosTecnologia})</small> </h1>

            <div className="tecnologia">
            {
                tecnologiaProdutos.map(p =>
                    <div key={p.id}className="item">
                        {p.nome} R${p.valor}
                        
                        <button onClick={()=>{handleAddFavorito(p)}}>Adicionar</button>

                        <button onClick={()=>{handleAddDenunciado(p);}}>Denuciar</button>

                        <div> <img src={img[p.id]} alt ='tecnologia' id="img-tecnologia"></img> </div>
            
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default TecnologiaComponent