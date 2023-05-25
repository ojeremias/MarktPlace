import React, { useEffect, useState } from 'react';
import './InformaticaComponent.css';
import { Link } from 'react-router-dom';

// import {adicionarFavoritos, adicionarDenuciado}  from '../MarketPlace/MarketPlace';


function InformaticaComponent({ adicionarFavoritos, adicionarDenuciado }) {

  const [quantidade, setQuantidade] = useState(0)
  const [quantidade1, setQuantidade1] = useState(0)
  const [listaInfor, setlistaInfor] = useState([]);
  const [ordem, setOrdem] = useState('preco')
  const [guardaID,setGuardaID] = useState(0);

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
      const informaticaRelogioF = await getProdutos('womens-watches');
      const informaticaRelogioM = await getProdutos('mens-watches');
      
      setlistaInfor([...informaticaSmartphone, ...informaticaNotebook, ...informaticaRelogioF, ...informaticaRelogioM]);
    
      
    
    }
    load();
  }, []);

  useEffect(() => {
    const listaOrdenada = listaInfor.sort(function (a, b) {
      return a[ordem] > b[ordem] ? -1 : a[ordem] < b[ordem] ? 1 : 0;
    });

    setlistaInfor([...listaOrdenada]);
  }, [ordem]);


  return (
    <div className='containerInformatica'>
      <h1>Setor de Informática e Variedades (Tonho)</h1> 
      <img src='./img/vtec.png' className='img' alt="logo" />

      <div className='divQuantidades'>

        Produtos que foram Adicionados : {quantidade} {' '}
        Produtos que foram Denunciados : {quantidade1}

      </div>
      <select onChange={(op) => setOrdem(op.target.value)} className='select'>
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

              <div className='texto' >
                Produto: <span className='textoP'>{p.nome}</span>
              </div>
              <div className='texto'>
                Preço(EUA): <span className='textoP'>{p.preco}</span>
              </div>
              <div className='texto'>
                Disponivel: <span className='textoP'>{p.estoque}</span>
              </div>
              <div className='link'>
               
              <Link to={ `/informatica/${p.id}`} >Ver Mais sobre esse Produto: </Link>
              </div>

            </div>

          )
        }
      </div>
      <h3><Link to="/">Retornar Ao MarketPlace</Link></h3>
    </div>
  )

}

export default InformaticaComponent