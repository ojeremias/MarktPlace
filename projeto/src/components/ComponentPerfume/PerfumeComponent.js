import React,{useState, useEffect} from "react"
import "./Perfume.css"


export default function BebidaComponent   ({adicionarFavoritos,adicionarDenuciado}){
    const [perfumeContar,setPerfumeContar] = useState(0)
    const [perfumeDenuciada,setPerfumeDenuciada]=useState(0)
    const [listaPerfume,setlistaPerfume]= useState([])
    const [ordem,setOrdem]= useState ('preco')
     
    
    
            function quantFavAContar() {
                    setPerfumeContar(perfumeContar + 1)
             }
            function quantDenAContar(){
                    setPerfumeDenuciada(perfumeDenuciada + 1)

     }

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
          const perfume = await getProdutos('fragrances');
          
          setlistaPerfume([...perfume,]);
        }
        load();
      }, []);
     useEffect(() => {
        const listaOrdenada = listaPerfume.sort(function(a,b) {
          return a[ordem] < b[ordem] ? -1 : a[ordem] > b[ordem] ? 1 : 0;
        });
    
        setlistaPerfume(listaOrdenada);
      },);
    
    return(

    <div className="conteinerPerfume"> 
    <div className="seila">
    <div className="tagAdicionado">
            <h1>Perfume </h1>
            <span> Bebidas adicionada <b> Favoritadas</b> :{perfumeContar} </span> <br>
            </br>
            <span> Bebidas adicionada <b> Denuciada</b> :
            {perfumeDenuciada}</span>
    </div>
    <div className="ConteinerSelect">
              <select onChange={(op)=>setOrdem(op.target.value)}>
                <option value="">Ordem por</option>
                <option value="preco">Preço</option>
                <option value="nome">Nome</option>
                <option value="avalicao">Avaliação</option>
              </select>
    </div>
    </div>
    <div className="carrosselPerf">
        { listaPerfume.map(p =>
        <div key={p.id} className="perfumeCard" > 
        <div className="perfumeText">
        <div className="perfumeImg">
            <img src={p.img}></img>
        </div>
          {p.nome}
            <h4>R$:
            {p.preco}
            </h4>
            <h4> Estoque: 
            {p.estoque}
        </h4>
        </div>
        
            <div className="perBot" onClick={()=>{

                adicionarFavoritos(p)
                quantFavAContar()
                console.log
                (p)
            }}>Adicionar</div>
                <div className="perBotD" onClick={()=>{
                    adicionarDenuciado(p)
                    quantDenAContar()
                  }}> Denunciar</div>

               

           

    
    
    
    
    </div>
    )}
    </div>
    </div>
    )
}