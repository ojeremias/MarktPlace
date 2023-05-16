import React, { useState, useEffect } from 'react';
import './Brinquedo.css';

function BrinquedoComponent({ brinquedosProdutos, categoria, adicionarFavoritos, adicionarDenuciado }) {
  const [btFavBrinquedos, setBtFvBrinquedos] = useState(0);
  const [btDenBrinquedos, setBtDenbtBrinquedos] = useState(0);
  const [dados, setDados] = useState(null);
  const [images, setImages] = useState([]);

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
        preco: product.price,
        img: product.thumbnail,
        marca: product.brand,
        estoque: product.sotck,
        avaliacao: product.rating
      })
    );

    return result;
  }

  useEffect(() => {
    const load = async () => {
      const sapatosMasculinos
    }
  }, [])

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products/category/womens-shoes')
  //     .then((response) => response.json())
  //     .then((dados) => {
  //       setDados(dados.message);
  //       const imgs = dados.message.map((item) => item.image);
  //       setImages(imgs);
  //     });
  // }, []);

  return (
    <div className="gallery">
      <h1>Brinquedos - Leonardo</h1>
      <span>Quantidade de brinquedos <b>favoritados</b>: {btFavBrinquedos}</span>
      <span>Quantidade de brinquedos <b>denunciados</b>: {btDenBrinquedos}</span>
      <div className="bcontent">
        {brinquedosProdutos?.map((item, index) => (
          <div key={item.id} className="content">
            <div className="imgBrinquedo">
            <img src={images[index]} alt={item.title} />
            </div>

            <div className="namePrice">
              <h3>{item.title}</h3>
              <span>
              <h6>R${item.price}</h6>
            </span>
          </div>

          <div className="buy">
            <div className="adicionar">
              <button
                onClick={() => {
                  adicionarFavoritos(item);
                  quantFavbtBrinquedos();
                  console.log(item);
                }}
              >
                Adicionar
              </button>
            </div>

            <div className="denunciar">
              <button
                onClick={() => {
                  adicionarDenuciado(item);
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
