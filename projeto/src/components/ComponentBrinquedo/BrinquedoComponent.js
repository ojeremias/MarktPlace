import React, { useState } from 'react';
import './Brinquedo.css'

function BrinquedoComponent({ brinquedoProdutos, adicionarFavoritos, adicionarDenuciado, produtos}) {

  const img = [ "", "./img/quebracabeca.svg", "./img/domino.svg", "./img/uno.svg",];
  const [btFavBrinquedos, setBtFvBrinquedos] = useState(0);
  const [btDenBrinquedos, setBtDenbtBrinquedos] = useState(0);
  
  function quantFavbtBrinquedos () {
    setBtFvBrinquedos(+btFavBrinquedos + 1);
  }
  function quantDenbtBrinquedos () {
    setBtDenbtBrinquedos(+btDenBrinquedos + 1);
  }

  return (
    <div className="gallery">
      <h1>Brinquedos - Leonardo</h1>
      <span>Quantidade de brinquedos <b>favoritados</b>: {btFavBrinquedos}</span>
      <span>Quantidade de brinquedos <b>denunciados</b>: {btDenBrinquedos}</span>
      <div className="bcontent">
      {brinquedoProdutos.map((p) => (
        
        <div key={p.id} className="content">
          <div className="imgBrinquedo">
            <img src={img[p.id]}></img>
          </div>

          <div className="namePrice">
            <h3>{p.nome}</h3>
            <span>
              <h6>R${p.preco}</h6>
            </span>
          </div>

          <div className="buy">
            <div className="adicionar">
              <button onClick={() => {
                  adicionarFavoritos(p);
                  quantFavbtBrinquedos();
                  console.log(p);
                }
                }>
                Adicionar
              </button>
            </div>

            <div className="denunciar">
              <button onClick={() => {
                  adicionarDenuciado(p);
                  quantDenbtBrinquedos();
                }}>
                Denuciar
              </button>
            </div>
          </div>
        </div>
      ))}
      </div>

    </div>
  );
}

export default BrinquedoComponent;
