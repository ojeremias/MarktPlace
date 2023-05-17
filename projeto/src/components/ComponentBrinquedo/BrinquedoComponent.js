import React, { useState, useEffect } from 'react';
import './Brinquedo.css';

function BrinquedoComponent({ brinquedosProdutos, categoria, adicionarFavoritos, adicionarDenuciado }) {
  const [btFavBrinquedos, setBtFvBrinquedos] = useState(0);
  const [btDenBrinquedos, setBtDenbtBrinquedos] = useState(0);

  // const [dados, setDados] = useState(null);
  // const [images, setImages] = useState([]);
  const [listaBrinquedos, setListaBrinquedos] = useState([]);
  // const [ordem, setOrdem] = useState('preco');

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
      const brinquedos = await pegarProdutos('home-decoration');

      setListaBrinquedos([...brinquedos]);
    }
    load();
  }, []);

  // useEffect(() => {
  //   const listaOrdenada = setListaBrinquedos.sort(function(a,b) {
  //     return a[ordem] < b[ordem] ? -1 : a[ordem] > b[ordem] ? 1 : 0;
  //   });

  //   setListaBrinquedos(listaOrdenada);
  // }, [ordem]);

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
        {listaBrinquedos?.map(p => (
          <div key={p.id} className="content">
            <div className="imgBrinquedo">
            <img src={p.img} alt={p.title} />
            </div>

            <div className="namePrice">
              <h3>{p.nome}</h3>
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
