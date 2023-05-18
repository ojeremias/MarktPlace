import React from 'react';
import './InformaticaComponent.css';


function InformaticaPagesComponent() {

  const informaticaProdutos=[
    {
      id: 1,
      nome: 'RTX 4090 TI',
      preco: 14000.00,
      img: './img/rtx4090ti.png'
    },
    {
      id:2,
      nome:'Mac Book',
      preco: 15000.00,
      img: './img/macbook.png',
    },
    {
      id:3,
      nome:'Notebook positivo',
      preco: 3500.00,
      img: './img/notebookPositivo.png'
    },
    {
      id:4,
      nome:'Notebook Ultra',
      preco: 2999.00,
      img: './img/notebookPositivo.png'
    },
    {
      id:5,
      nome:'Notebook Acer',
      preco: 3871.40,
      img: './img/notebookPositivo.png'
    },
    {
      id:6,
      nome:'Processador i5-9440f',
      preco: 1567.00,
      img: './img/notebookPositivo.png'
    },
  ]

  console.log(informaticaProdutos)
  return(

        <div className='containerInformatica' >
        <h1>Setor Informatica (Antonio)</h1>
          <div className='divQuantidades'>
          
          </div>
          
    <div className='telaInformatica'>
      {

        
        informaticaProdutos.map(p => 
          <div key={p.id} className="telaInformaticaCard">
              
          
          <div>
          Produto: {p.nome}
          </div>
          <div className='telaInformaticaImg'>
          <img className='img' src={p.img} alt='Img Antonio' ></img>
          </div>
          <div>
            Preço: R${p.preco}
          </div>                
          </div>
        )
    }
    </div>
    </div>
   
        
    )
}


export default InformaticaPagesComponent;