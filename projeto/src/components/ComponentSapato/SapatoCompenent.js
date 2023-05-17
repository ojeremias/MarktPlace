import React, { useEffect, useState } from 'react'

import "./sapatos.css"
function SapatosCompenent({ sapatoProdutos, categoria, onAdd, roandAdd, adicionarFavoritos, adicionarDenuciado }) {

  const [sapContar, setSapcontar] = useState(0);

  const [listaSapato, setListaSapato] = useState([]);
  const [ordem, setOrdem] = useState('preco')

  function quantFavSaoContar() {
    setSapcontar(sapContar + 1)
  }
  async function getProdutos(categoria) {
    const response = await fetch(`https://dummyjson.com/products/category/${categoria}`);
    const dadosApi = await response.json();
    const result = dadosApi.products.map(
      product => ({
        id: product.id,
        nome: product.title,
        preco: product.price,
        img: product.thumbnail,
        marca: product.brand,
        estoque: product.stock,
        avaliacao: product.rating
      })
    );

    return result;
  }

  useEffect(() => {
    console.log('tentei');
    const load = async () => {
      const sapatosMasculinos = await getProdutos('mens-shoes');
      const sapatosFemininos = await getProdutos('womens-shoes');
      
      setListaSapato([...sapatosFemininos, ...sapatosMasculinos]);
    }
    load();
  }, []);

  useEffect(() => {
    const listaOrdenada = listaSapato.sort(function(a,b) {
      return a[ordem] < b[ordem] ? -1 : a[ordem] > b[ordem] ? 1 : 0;
    });

    setListaSapato(listaOrdenada);
  }, [ordem]);


  return (
    <div className='sapConteiner'>
      <h1>SAPATOS ROBERTO/CLICIA</h1>
      <span> Sapatos adicionado <b>favoritados</b>:{sapContar}</span>
      <select onChange={(op) => setOrdem(op.target.value)}>
          <option value='preco'>Preço</option>
          <option value='estoque'>Estoque</option>
          <option value='avaliacao'>Avaliação</option>
        </select>
      <div className="sapTela">
        {

          listaSapato.map(p =>
            <div key={p.id} className='sapTelaCard'>

              <div className='sapteladaImg' >
                <img className='img' src={p.img}></img>
              </div>

              <div className='sapTexto' >
                {p.nome}
              </div>

              <div className='sapTexto'>
                R$:{p.preco}
              </div>

              <div className='sapBotao' onClick={() => {
                adicionarFavoritos(p);
                quantFavSaoContar();

                console.log(p)
              }}>Adicionar </div>

              <div className='sapBotao' onClick={() => {
                adicionarDenuciado(p);
              }}>Denuciar</div>


            </div>

          )
        }
      </div>
    </div>
  )
}

export default SapatosCompenent