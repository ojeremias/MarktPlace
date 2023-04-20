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
import TecnologiaComponent from './components/ComponentTecnologia/TecnologiaComponent';


function App() {


  const maquiagemProdutos=[
    {
      id:1,
      nome: 'base',
      preco: 55.90
    },
    {
      id:2,
      nome:'corretivo',
      preco: 38.40
    },
    {
      id:3,
      nome:'blush',
      preco:29.90
    },
  ]
  const comidaProdutos=[
    {
      id:1,
      nome: 'Batata-frita',
      preco: 4.00
    },
    {
      id:2,
      nome:'Sanduíche',
      preco: 40.00,
      
    },
    {
      id:3,
      nome: 'Lasanha',
      preco: 50.00
    },
    {
      id:4,
      nome: 'Pizza',
      preco: 25.00
    },
    {
      id:5,
      nome:'Cachorro-quente',
      preco:15.00
    },
    {
      id:6,
      nome: 'Tacos',
      preco: 30.00
    },
    {
      id:7,
      nome:'Nachos',
      preco: 25.00
    },
    {
      id:8,
      nome:'Burrito',
      preco: 35.00
    }
  ]
  const sapatoProdutos=[
    {
      id: 1,
      nome:'Nike Dunk',
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
        preco: 14000.00,
        img: './img/rtx4090ti.png'
      },
      {
        id:2,
        nome:'Mac Book',
        preco: 15000.00,
        img: '',
      },
      {
        id:3,
        nome:'Notebook positivo',
        preco: 3500.00,
        img: ''
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

    const tecnologiaProdutos = [
      {
        id: 1, 
        nome: "Fone",
        valor: 15.99
      },
      {
        id: 2, 
        nome: "Celular Positivo",
        valor: 500
      },
      {
        id: 3,
        nome: "Gabinete",
        valor: 250
      },
      {
        id: 4,
        nome: "Impressora 3d",
        valor: 3500.99
      },
      {
        id: 5,
        nome: "Kit Arduino",
        valor: 75.99
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
  ]

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
          <ComidaComponent adicionarDenuciado={adicionarDenuciado} adicionarFavoritos={adicionarFavoritos} comidaProdutos={comidaProdutos}/>
        </div>
        <div className="box">
          <SapatoCompenent adicionarFavoritos={adicionarFavoritos}adicionarDenuciado={adicionarDenuciado} sapatoProdutos={sapatoProdutos}/>
        </div>
        <div className="box">
          <SalgadoCompenent adicionarDenuciado={adicionarDenuciado} adicionarFavoritos={adicionarFavoritos} salgadoProdutos={salgadoProdutos}/>
        </div>
        <div>
          <BebidaComponent adicionarFavoritos={adicionarFavoritos} bebidaProdutos={bebidaProdutos}/>
        </div>
        <div>
          <BrinquedoComponent adicionarFavoritos={adicionarFavoritos} adicionarDenuciado={adicionarDenuciado} brinquedoProdutos={brinquedoProdutos}/>
        </div>
        <div>
            <InformaticaComponent adicionarFavoritos={adicionarFavoritos} adicionarDenuciado={adicionarDenuciado} produtos={informaticaProdutos}/>
        </div>

            <div>
              <TecnologiaComponent adicionarDenuciado={adicionarDenuciado} adicionarFavoritos={adicionarFavoritos} tecnologiaProdutos={tecnologiaProdutos}/>
            </div>

        <div className="box">
          <MaquiagemComponent maquiagemProdutos={maquiagemProdutos}/>
        </div>
    </div>
  );
}

export default App;
