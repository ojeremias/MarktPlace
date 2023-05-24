import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './InformaticaComponent.css';


function DetalheProdutoInformatica() {

    const [produto, setProduto] = useState(null);
    const { idProduto } = useParams();


    useEffect(() => {

        const load = async () => {
            const result = await fetch(``);
            const produto = await result.json()


            setProduto({
                
            });
        }

        load();
    }, [idProduto]);


    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Detalhe Do Prduto: id {idProduto}</h2>

            <div  className='telaInformaticaCard'>

                {/* <div className='telaInformaticaImg' >
                        <img className='img' src={produto.img}></img>
                                                </div> */}

                        <div className='texto' >
                            Produto: <span className='textoP'>{produto.nome}</span>
                        </div>
                        <div className='texto'>
                            Preço(EUA): <span className='textoP'>{produto.preco}</span>
                        </div>
                        <div className='texto'>
                            Disponivel: <span className='textoP'>{produto.estoque}</span>
                        </div>


                    </div>

                
        </div>
    )
}

export default DetalheProdutoInformatica