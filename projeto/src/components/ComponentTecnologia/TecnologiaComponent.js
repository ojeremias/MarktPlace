import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function TecnologiaComponent ({ tecnologiaProdutos, adicionarFavoritos, adicionarDenuciado}) {

    // const img = ["", "./img/fone.jpg", "./img/positivo.jpg", "./img/gabinete.jpg", "./img/impressora_3d.jpg", "./img/arduino.jpg"]

    const [countFavoritosTecnologia, setCountFavoritosTecnologia] = useState(0);


    const [meusProdutos, setMeusProdutos]  = useState([]); // criou useState com array vazio para listar os produtos
  
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
    
    useEffect(() => {
        async function getProdutos(categoria) {
            const response = await fetch(`https://dummyjson.com/products/category/${categoria}`); // link da api que vai listar a categoria, que vão ser os smartphones
            const dadosApi = await response.json();
            const result = dadosApi.products.map( 
              product => ({ // dados da api 
                id: product.id,
                title: product.title,
                preco: product.price,
                nome: product.title,
                valor: product.price,
                estoque: product.stock,
                categoria: product.category,
                thumbnail: product.thumbnail
              })
            );

            setMeusProdutos(result);
        }
        getProdutos('smartphones');

        
    },[]);

    return (
        <div className="box-produto">
            <h1>Tecnologia - Jeallyson</h1>
            <h1><small>Favoritos: ({countFavoritosTecnologia})</small> <small>Denunciados: ({countDenunciadosTecnologia})</small> </h1>
            <Link to="tecnologia">Clique para ir a página tecnologia</Link>
            
        <select >
          <option value='preco'>Preço</option>
          <option value='estoque'>Estoque</option>
          <option value='avaliacao'>Avaliação</option>
        </select>
            <div className="tecnologia">
            {
                meusProdutos.map(p =>
                    <div key={p.id}className="item">
                        
                        <div> <img src={p.thumbnail} alt ='tecnologia' id="img-tecnologia"></img> </div>
                        <div> {p.nome} </div>
                        <div> Valor R$ {p.valor} </div>
                        <div> Estoque: {p.estoque} </div>
                                           
                        <button onClick={()=>{handleAddFavorito(p)}}>Adicionar</button>

                        <button onClick={()=>{handleAddDenunciado(p);}}>Denuciar</button>
            
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default TecnologiaComponent