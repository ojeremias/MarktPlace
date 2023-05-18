import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './Brinquedo.css';

function BrinquedoComponent({ adicionarFavoritos, adicionarDenuciado }) {
  const [btFavBrinquedos, setBtFvBrinquedos] = useState(0);
  const [btDenBrinquedos, setBtDenbtBrinquedos] = useState(0);

  // const [dados, setDados] = useState(null);
  // const [images, setImages] = useState([]);
  const [listaBrinquedos, setListaBrinquedos] = useState([]);
  const [ordem, setOrdem] = useState(null);

  function quantFavbtBrinquedos() {
    setBtFvBrinquedos(btFavBrinquedos + 1);
  }

  function quantDenbtBrinquedos() {
    setBtDenbtBrinquedos(btDenBrinquedos + 1);
  }

  async function pegarProdutos(categoria) {
    const response = await fetch(`https://dummyjson.com/products/category/${categoria}`);
    const dadosApi = await response.json();
    const result = dadosApi.products.map(
      product => ({
        id: product.id,
        nome: product.title,
        preco: Number(product.price),
        img: product.thumbnail,
        marca: product.brand,
        estoque: product.sotck,
        avaliacao: Number(product.rating)
      })
    );

    return result;
  }

  useEffect(() => {
    const load = async () => {
      const brinquedos = await pegarProdutos('home-decoration');

      setListaBrinquedos([...brinquedos]);
    }
    load();
  }, []);

  useEffect(() => {

    console.log('ordenar ' + ordem);
    if(listaBrinquedos?.length >0){
      const listaOrdenada = listaBrinquedos.sort(function(a,b) {
        return (a[ordem] < b[ordem]) ? -1 : (a[ordem] > b[ordem]) ? 1 : 0;
      });
      console.log(listaBrinquedos);
      setListaBrinquedos([...listaOrdenada]);
    }
   
  }, [ordem]);


  return (
    <div className="gallery">
      <Link to="/brinquedos">Página principal de brinquedos</Link>
      <h1>Brinquedos - Leonardo</h1>

      <div className="container-header">
        <div className="container-totais">
          <span>Quantidade de brinquedos <b>favoritados</b>: {btFavBrinquedos}</span>
          <span>Quantidade de brinquedos <b>denunciados</b>: {btDenBrinquedos}</span>
        </div>
        <div className="container-select">
          <select onChange={(evt) => setOrdem(evt.target.value)}>
            <option value="">Ordenar por</option>
            <option value="nome">Nome</option>
            <option value="preco">Preço</option>
            <option value="avaliacao">Avaliaçâo</option>
          </select>
        </div>

      </div>
      
      
      <div className="bcontent">
        {listaBrinquedos?.map(p => (
          <div key={p.id} className="content">
            <div className="imgBrinquedo">
            <img src={p.img} alt={p.title} />
            </div>

            <div className="namePrice">
              <h3>{p.nome} ({p.avaliacao})</h3>
              <span>
              <h6>R${p.preco}</h6>
            </span>
          </div>

          <div className="buy">
            <div className="adicionar">
              <button
                onClick={() => {
                  adicionarFavoritos(p);
                  quantFavbtBrinquedos();
                  console.log(p);
                }}
              >
                Adicionar
              </button>
            </div>

            <div className="denunciar">
              <button
                onClick={() => {
                  adicionarDenuciado(p);
                  quantDenbtBrinquedos();
                }}
              >
                Denunciar
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
