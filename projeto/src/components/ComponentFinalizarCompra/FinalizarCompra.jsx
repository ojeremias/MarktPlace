import React from "react";
import "./FinalizarCompra.css";
import { useLocation } from "react-router-dom";

function FinalizarCompra({ favoritos }) {
  const location = useLocation();
  let soma = 0;

  function totalPreco() {
    location.state.fav.map(({ preco }) => {
      return (soma += preco);
    }); //temos o preço
  }

  totalPreco();
  console.log(soma);
  return (
    <div className="boxContainer">
        <div>
          <h2>Inimigo da estelização! </h2>
          <h3>Descrição da compra</h3>
        </div>
      <div className="container2">
        <div className="row">
          <div  className="containerPreco">
            <h2>Nome</h2>
            <h2>Preço</h2>
          </div>
          <div>
            
          </div>
        </div>

        <div className="produtosFinalizarCompra">
          {location.state.fav.map(({ nome, preco }) => {
            return (
              <>
              <span className="containerPreco">
                <div className="produtosY">
                  <p className="teste">{nome}</p>
                </div>
                <div className="produtosY">
                
                  <p className="">R${preco}</p>
                </div>
              </span>
              </>
            );
          })}
        </div>
      </div>

      <div>
        <p className="precoFinal">total R$: {soma}</p>
      </div>
    </div>
  );
}
export default FinalizarCompra;
