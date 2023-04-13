import { useState } from 'react';
import './App.css';
import ComidaComponent from './components/ComponenteComida/ComidaComponent';
import SapatoCompenent from './components/ComponentSapato/SapatoCompenent';
import BebidaComponent from './components/ComponentBebida/BebidaComponent'
import SalgadoCompenent from './components/ComponentSalgado/SalgadoComponent';
import FavoritoComponent from './components/ComponentFavorito/FavoritoComponent';

function App() {

  const comidaProdutos=[
    {
      id:1,
      nome: 'batata-frita',
      preco: '4.00'
    },
    {
      id:2,
      nome:'sanduíche',
      preco: 40.00,
      
    },
    {
      id:3,
      nome: 'lasanha',
      preco: 50.00
    }
  ]
  const sapatoProdutos=[
    {
      id: 1,
      nome:'Nike Dank',
      preco: 120.00
    },
    {
      id: 2,
      nome: 'rasteirinha',
      preco: 60.00
    },
    {
      id: 3,
      nome: 'Air force',
      preco: 150.00
    },
  ]
    const bebidaProdutos=[
      {
        id: 1,
        nome: 'Red Label',
        preco: 120.00,
      },
      {
        id:2,
        nome:'Corote',
        preco: 3.50,

      },
      {
        id: 3,
        nome:'Pitu',
        preco: 7.00
      }
    ]
    const informaticaProdutos=[
      {
        id: 1,
        nome: 'RTX 4090 TI',
        preco: 14000.00
      },
      {
        id:2,
        nome:'Mac Book',
        preco: 15000.00
      },
      {
        id:3,
        nome:'Notebook positivo',
        preco: 3500.00
      },
    ]
    const brinquedosProduto=[
      {
        id:1,
        nome: 'quebra-cabeça',
        preco: 20.00
      },
      {
        id:2,
        nome: 'dominó',
        preco: 20.00
      },
      {
        id: 3,
        nome:'UNO',
        preco: 10.00
      }
    ]
    const salgadoProdutos = [{
      id: 1,
      nome: "Coxinha", 
      valor: 3.5,
      categoria: "Salgado"
    },
    {
      id: 2,
      nome: "Mini Coxinha", 
      valor: 0.25,
      categoria: "Salgado"
    },
    {
      id: 3,
      nome: "Enroladinho", 
      valor: 3.5,
      categoria: "Salgado"
    },
    {
      id: 4,
      nome: "Pastel de Queijo", 
      valor: 3.5,
      categoria: "Salgado"
    },
    {
      id: 5,
      nome: "Pastel de Carne", 
      valor: 3.5,
      categoria: "Salgado"
    }
  ];

    const [favoritos, setFavoritos]=useState([])

    function adicionarFavoritos(produto){ //O parâmetro passado será informa pelos componentes.
      //Eles passaram um objeto, então: ao passar comidaProdutos, toda a lista será mostrada.
      setFavoritos([produto])
      
    } 
    console.log(favoritos);

    return (
    <div className="App">
        <div>
          <FavoritoComponent favoritos={favoritos}/>
        </div>

          {/* props:{
            comidaProdutos:[{
              nome: 12321
              preco
            },
            {

            }
          }] */}
        <div className="box">
          <ComidaComponent  adicionarFavoritos={adicionarFavoritos} comidaProdutos={comidaProdutos}/> {/*o 1° comidaProdutos é uma props que  meio que cria uma 
            variável com esse nome, e o seu valor é um objeto, que é comidaProdutos da linha 12 */}
        </div>
        <div className="box">
          <SapatoCompenent sapatoProdutos={sapatoProdutos}/>
        </div>
        <div className="box">
          <SalgadoCompenent salgadoProdutos={salgadoProdutos}/>
        </div>
    </div>
  );
}

export default App;
