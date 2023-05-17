import React, { useEffect, useState } from 'react';
// import '../../App.css';
import './InformaticaComponent.css';


function InformaticaComponent({ adicionarFavoritos, adicionarDenuciado }) {

  const [infoContar, setinfoContar] = useState(0);

  const [listaInfor, setlistaInfor] = useState([]);
  const [ordem, setOrdem] = useState('preco')

  function quantFavSaoContar() {
    setinfoContar(infoContar + 1)
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
   
    const load = async () => {
      const informaticaNotebook = await getProdutos('laptops');
      const informaticaSmartphone = await getProdutos('smartphones');

      setlistaInfor([...informaticaSmartphone, ...informaticaNotebook]);
    }
    load();
  }, []);

  useEffect(() => {
    const listaOrdenada = listaInfor.sort(function(a,b) {
      return a[ordem] < b[ordem] ? -1 : a[ordem] > b[ordem] ? 1 : 0;
    });

    setlistaInfor(listaOrdenada);
  }, [ordem]);


  return (
    <div className='containerInformatica'>
      <h1>Informática do Tonho</h1>
      <span> Informatica adicionado <b>favoritados</b>:{infoContar}</span>
      <select onChange={(op) => setOrdem(op.target.value)}>
          <option value='preco'>Preço</option>
          <option value='estoque'>Estoque</option>
          <option value='avaliacao'>Avaliação</option>
        </select>
      <div className="telaInformatica">
        {

          listaInfor.map(p =>
            <div key={p.id} className='telaInformaticaCard'>

              <div className='telaInformaticaImg' >
                <img className='img' src={p.img}></img>
              </div>

              <div className='' >
                {p.nome}
              </div>

              <div className=''>
                $:{p.preco}
              </div>

              <div className='button' onClick={() => {
                adicionarFavoritos(p);
                quantFavSaoContar();

                console.log(p)
              }}>Adicionar </div>

              <div className='button' onClick={() => {
                adicionarDenuciado(p);
              }}>Denuciar</div>


            </div>

          )
        }
      </div>
    </div>
  )
}

export default InformaticaComponent