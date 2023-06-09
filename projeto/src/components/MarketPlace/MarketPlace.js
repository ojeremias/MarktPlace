import { useEffect, useState } from 'react';
import '../../App.css';
import ComidaComponent from '../ComponentComida/ComidaComponent';
import SapatoCompenent from '../ComponentSapato/SapatoCompenent';
import PerfumeComponent from '../ComponentPerfume/PerfumeComponent'
import SalgadoCompenent from '../ComponentSalgado/SalgadoComponent';
import MaquiagemComponent from '../ComponentMaquiagem/ComponentMaquiagem';
import FavoritoComponent from '../ComponentFavorito/FavoritoComponent';
import DenuciadoComponent from '../ComponentDenuciado/DenuciadoComponent';
import InformaticaComponent from '../ComponentInformatica/InformaticaComponent'
// import DenunciadoComponent from './components/ComponentDenuciado/DenuciadoComponent';
import BrinquedoComponent from '../ComponentBrinquedo/BrinquedoComponent'
import TecnologiaComponent from '../ComponentTecnologia/TecnologiaComponent';


function MarketPlace() {


  const maquiagemProdutos=[
    {
      id:1,
      nome: 'base',
      preco: 55.90,
      img: "./img/maqBase.jpg"
    },
    {
      id:2,
      nome:'corretivo',
      preco: 38.40,
      img: "./img/maqBlush.jpg"
    },
    {
      id:3,
      nome:'blush',
      preco:29.90,
      img:"./img/maqCorretivo.png"
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
      preco: 120.00,
      img:'./img/nike1.webp'
    },
    {
      id: 2,
      nome: 'TR 9 Feminino',
      preco: 60.00,
      img:'./img/nike2.jpg'
    },
    {
      id: 3,
      nome: 'Air force',
      preco: 150.00,
      img:'./img/nike3.jpg'
    },
  ]
    const PerfumeProdutos=[
      {
        id: 1,
        nome: 'Red Label',
        preco: 120.00,
        img:'./img/redlabel.png'
      },
      {
        id:2,
        nome:'Corote',
        preco: 3.50,
        img:'./img/corote.png'

      },
      {
        id: 3,
        nome:'Pitu',
        preco: 7.00,
        img:'./img/pitu'
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
        img: './img/macbook.png',
      },
      {
        id:3,
        nome:'Notebook positivo',
        preco: 3500.00,
        img: './img/notebookPositivo.png'
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
        valor: 15.99,
        img: "./img/fone.jpg"
      },
      {
        id: 2, 
        nome: "Celular",
        valor: 500,
        img: "./img/positivo.jpg"
      },
      {
        id: 3,
        nome: "Gabinete",
        valor: 250,
        img: "./img/gabinete.jpg"
      },
      {
        id: 4,
        nome: "Impressora",
        valor: 3500,
        img: "./img/impressora_3d.jpg"
      },
      {
        id: 5,
        nome: "Kit Arduino",
        valor: 75.99,
        img: "./img/arduino.jpg"
      }

  ]

    const salgadoProdutos = [{
      id: 0,
      nome: "Coxinha", 
      valor: 'R$: 3,50',
      img: './img/coxinha.png',
    },
    {
      id: 1,
      nome: "Mini Coxinha", 
      valor: 'R$: 0,25',
      img: './img/miniCoxinha.png',
    },
    {
      id: 2,
      nome: "Enroladinho", 
      valor: 'R$: 3,50',
      img: './img/enroladinho.png',
    },
    {
      id: 3,
      nome: "Pastel de Queijo", 
      valor: 'R$: 3,50',
      img: './img/pastelDeQueijo.png',
    },
    {
      id: 4,
      nome: "Pastel de Carne", 
      valor: 'R$: 3,50',
      img: './img/pastelDeCarne.png',
    },
  ]

  /**
   * TODO: REFATORAR
   */
  const [favoritos, setFavoritos]=useState([])

  

    function adicionarFavoritos(produto){ //O parâmetro passado será informado pelos componentes.
      //Eles passaram um objeto, então: ao passar comidaProdutos, toda a lista será mostrada.
      console.log(produto );
  
    }

  function adicionarFavoritos(produto){ //O parâmetro passado será informado pelos componentes.
    //Eles passaram um objeto, então: ao passar comidaProdutos, toda a lista será mostrada.    
    const favEncontrado = favoritos.find( f => f.id === produto.id);
    if(!favEncontrado){
      setFavoritos([...favoritos, produto]);
    }else{
      console.log("ja foi adicionado antes: "+ produto.nome)
    }
  } 

    


    const [denunciado, setDenunciado] = useState([]);

    function adicionarDenuciado(produto){
      //console.log(produto);
      const denEncontrado = denunciado.find(f => f.id === produto.id);
      if(!denEncontrado){
        setDenunciado([...denunciado, produto])
      }else{
        console.log(`O produto ${produto.nome} já foi adicionado`)
      }
    }

    // const [denunciado, setDenunciado]=useState([])

    // function adicionarDenunciado(produto){
    //   setDenunciado([...denunciado, produto])
    // }


    const [produtos, setProdutos ] = useState([])

    useEffect( () => {

      const load =  async ()=>{
        const response = await fetch('https://dummyjson.com/products?limit=100')
        const responseProduct = await response.json();

        console.log(responseProduct.products);
        const produtos =  responseProduct.products.map(
           ({ category, description, imagens, price, title, id}) => (
          {
            categoria: category,
            descricao: description,
            imagem: imagens,
            preco: price,
            nome: title,
            id: id
          }
          )
          
          
        )
        
        console.log("produtos " + produtos);
        setProdutos(responseProduct);

        
      }

      load();
    }, [])

    

    return (
    <div className="MarketPlace">

      <div className='favoritosDenunciados'>
        <div className='box'>
          <FavoritoComponent favoritos={favoritos}/>
        </div>

        <div className='box'>
          <DenuciadoComponent denuciado={denunciado}/>
        </div>
      </div>
          
        <div className="box">
          <ComidaComponent adicionarDenuciado={adicionarDenuciado} adicionarFavoritos={adicionarFavoritos} 
          comidaProdutos={comidaProdutos}
          produtos = { produtos}
          />
        </div>
        <div className="box">
          <SapatoCompenent adicionarFavoritos={adicionarFavoritos}adicionarDenuciado={adicionarDenuciado} sapatoProdutos={sapatoProdutos}/>
        </div>
        <div className="box">
          <SalgadoCompenent adicionarDenuciado={adicionarDenuciado} adicionarFavoritos={adicionarFavoritos} salgadoProdutos={salgadoProdutos}/>
        </div>
        <div>
          <PerfumeComponent adicionarFavoritos={adicionarFavoritos} adicionarDenuciado={adicionarDenuciado} 
          PerfumeProdutos={PerfumeProdutos}/>
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
      
            <div>
              <MaquiagemComponent adicionarDenuciado={adicionarDenuciado} adicionarFavoritos={adicionarFavoritos} maquiagemProdutos={maquiagemProdutos}/>
            </div>

        
    </div>
  );
}

export default MarketPlace;
