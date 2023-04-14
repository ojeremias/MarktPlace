import { useState } from 'react';
import './App.css';
import ComidaComponent from './components/ComponentComida/ComidaComponent';
import SapatoCompenent from './components/ComponentSapato/SapatoCompenent';
import BebidaComponent from './components/ComponentBebida/BebidaComponent'
import SalgadoCompenent from './components/ComponentSalgado/SalgadoComponent';
import MaquiagemComponent from './components/ComponentMaquiagem/ComponentMaquiagem';
import FavoritoComponent from './components/ComponentFavorito/FavoritoComponent';
import DenuciadoComponent from './components/ComponentDenuciado/DenuciadoComponent';
import InformaticaComponent from './components/ComponentInformatica/InformaticaComponent'
// import DenunciadoComponent from './components/ComponentDenuciado/DenuciadoComponent';
import BrinquedoComponent from './components/ComponentBrinquedo/BrinquedoComponent'

function App() {

  const maquiagemProdutos=[
    {
      id:1,
      nome: 'rimel',
      preco: 12.00
    },
    {
      id:2,
      nome:'batom',
      preco: 10.00
    },
    {
      id:3,
      nome:'blush',
      preco:8.50
    },
  ]
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
    const brinquedoProdutos=[
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
    },
    {
      id: 2,
      nome: "Mini Coxinha", 
      valor: 0.25,
    },
    {
      id: 3,
      nome: "Enroladinho", 
      valor: 3.5,
    },
    {
      id: 4,
      nome: "Pastel de Queijo", 
      valor: 3.5,
    },
    {
      id: 5,
      nome: "Pastel de Carne", 
      valor: 3.5,
    }
  ];

    const [favoritos, setFavoritos]=useState([])

    function adicionarFavoritos(produto){ //O parâmetro passado será informado pelos componentes.
      //Eles passaram um objeto, então: ao passar comidaProdutos, toda a lista será mostrada.
      console.log(produto);
      setFavoritos([...favoritos, produto]);
      
    } 

    const [denunciado, setDenunciado] = useState([]);

    function adicionarDenuciado(produto){
      console.log(produto);
      setDenunciado([...denunciado, produto])
    }

    // const [denunciado, setDenunciado]=useState([])

    // function adicionarDenunciado(produto){
    //   setDenunciado([...denunciado, produto])
    // }

    console.log(favoritos);

    return (
    <div className="App">

      <div className='favoritosDenunciados'>
        <div className='box'>
          <FavoritoComponent favoritos={favoritos}/>
        </div>

        <div className='box'>
          <DenuciadoComponent denuciado={denunciado}/>
        </div>
      </div>
          
        <div className="box">
          <ComidaComponent  adicionarFavoritos={adicionarFavoritos} comidaProdutos={comidaProdutos}/> {/*o 1° comidaProdutos é uma props que  meio que cria uma 
            variável com esse nome, e o seu valor é um objeto, que é comidaProdutos da linha 12 */}
        </div>
        <div className="box">
          <SapatoCompenent adicionarFavoritos={adicionarFavoritos} sapatoProdutos={sapatoProdutos}/>
        </div>
        <div className="box">
          <SalgadoCompenent adicionarDenuciado={adicionarDenuciado} adicionarFavoritos={adicionarFavoritos} salgadoProdutos={salgadoProdutos}/>
        </div>
        <div>
          <BebidaComponent adicionarFavoritos={adicionarFavoritos} bebidaProdutos={bebidaProdutos}/>
        </div>
        <div>
          <BrinquedoComponent adicionarFavoritos={adicionarFavoritos} brinquedoProdutos={brinquedoProdutos}/>
        </div>
        <div>
            <InformaticaComponent adicionarFavoritos={adicionarFavoritos} informaticaProdutos={informaticaProdutos}/>
        </div>
        <div className="box">
          <MaquiagemComponent maquiagemProdutos={maquiagemProdutos}/>
        </div>
    </div>
  );
}

export default App;
