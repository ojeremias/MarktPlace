import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './InformaticaComponent.css';


function DetalheProdutoInformatica() {

    const [listaInfor, setlistaInfor] = useState(null);
    const { idProduto } = useParams();

    async function getProdutos(categoria) {
        const response = await fetch(`https://dummyjson.com/products/category/${categoria}/${idProduto}`);
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

            setlistaInfor([...informaticaNotebook]);
        }
        load();
    }, [idProduto]);


    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Detalhe Do Prduto: id {idProduto}</h2>

            <div  className='telaInformaticaCard'>

                {/* <div className='telaInformaticaImg' >
                        <img className='img' src={listaInfor.img}></img>
                                                </div> */}

                        <div className='texto' >
                            Produto: <span className='textoP'>{listaInfor.nome}</span>
                        </div>
                        <div className='texto'>
                            Preço(EUA): <span className='textoP'>{listaInfor.preco}</span>
                        </div>
                        <div className='texto'>
                            Disponivel: <span className='textoP'>{listaInfor.estoque}</span>
                        </div>


                    </div>

                
        </div>
    )
}

export default DetalheProdutoInformatica