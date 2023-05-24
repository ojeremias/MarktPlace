import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './DetalheProdutoInformatica.css';

function DetalheProdutoInformatica() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);

    useEffect(() => {
        const loadProduto = async () => {
            const result = await fetch(`https://dummyjson.com/products/${id}`);
            const p = await result.json();

            setProduto({
                id: p.id,
                nome: p.title,
                marca: p.brand,
                preco: p.price,
                avaliacao: p.rating,
                estoque: p.stock,
                categoria: p.category,
                img: p.thumbnail,
                img1: p.thumbnail,
                img2: p.thumbnail,
                img3: p.thumbnail,
                img4: p.thumbnail,
                img5: p.thumbnail,
                descricao: p.description
            });
        };

        loadProduto();
    }, [id]);


    return (
        <div className='containerInformaticaDetalhes'>
            <h2>Detalhes do produto id: {id}</h2>
            {produto &&
            
                <div className='telaInformaticaCardDetalhes'>

                    <div className='telaInformaticaImgDetalhes' >
                        <img className='img' src={produto.img}></img>
                        <img className='img' src={produto.img1}></img>
                        <img className='img' src={produto.img2}></img>
                        <img className='img' src={produto.img3}></img>
                        <img className='img' src={produto.img4}></img>
                        <img className='img' src={produto.img5}></img>
                    </div>

                    <div className='textoDetalhes' >
                        Modelo: <span className='textoPDetalhes'>{produto.nome}</span>
                    </div>
                    <div className='textoDetalhes' >
                        Marca: <span className='textoPDetalhes'>{produto.marca}</span>
                    </div>
                    <div className='textoDetalhes' >
                        Descrição: <span className='textoPDetalhes'>{produto.descricao}</span>
                    </div>
                    <div className='textoDetalhes'>
                        Preço: <span className='textoPDetalhes'>${produto.preco}</span>
                    </div>
                    <div className='textoDetalhes'>
                        Quantidade Disponivel: <span className='textoPDetalhes'>{produto.estoque}</span>
                    </div>
                    <div className='textoDetalhes'>
                        Avaliação: <span className='textoPDetalhes'>{produto.avaliacao}</span>
                    </div>




                </div>
            }
        </div>
    );
}

export default DetalheProdutoInformatica;
