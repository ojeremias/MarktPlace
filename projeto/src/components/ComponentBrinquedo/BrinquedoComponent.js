import React from "react";

function BrinquedoComponent({ brinquedoProdutos, adicionarFavoritos, adicionarDenuciado,}) {
  const img = [ "", "./img/quebracabeca.svg", "./img/domino.svg", "./img/uno.svg",];
  return (
    <div className="gallery">
      <h1>Brinquedos - Leonardo</h1>
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
              <button onClick={() => 
              {adicionarFavoritos(p);
                  console.log(p);
                }}>
                Adicionar
              </button>
            </div>

            <div className="denunciar">
              <button onClick={() => {
                  adicionarDenuciado(p);
                }}>
                Denuciar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BrinquedoComponent;
