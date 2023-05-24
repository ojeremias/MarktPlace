## Tarefas para o JERMIAS :D

- Criar checagem no favorito e denunciar;
- Consumir produtos de uma API (ver SIGAA);
- Transformar dados do consumo da API usando o MAP;
- Propor um layout melhor - melhorar a estilização geral.

## Tarefas para o restante :v

- Criação de um card para os produtos;
- Organizar os produtos numa div (que se chama container)


 const { id } = useParams();
  const { produto, setProduto } = useState(null);
```

Uma vez estadando com parâmetro, fazer um _useEffect_ para realizar a consulta na API externa, e recuperar um produto específico:
```
    useEffect(() => {
        const loadProduto = async () => {
            const result = await fetch(`https://dummyjson.com/products/${id}`);
            const p = await result.json();
            
            setProduto({
                id: p.id,
                nome: p.name,
                preco: p.price,
                avaliacao: p.rating,
                estoque: p.stock
            });
        }
        if(id)
            loadProduto();
    }, [id]);
```

Uma vez declarada as variáveis, e o useEffect definido, você pode montar o retorno
```
    return (
        <div>{produto.nome}</div>
    )