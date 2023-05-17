1. Tarefa de useState, com select
    a. Interface
        Criar componente <select> com as opções de ordenação.
        ```
            <select>
                <option value="">Ordenar por</option>
                <option value="nome">Nome</option>
                <option value="preco">Preço</option>
                <option value="avaliacao">Avaliaçâo</option>
            </select>
        ```
    b. Criar uma variavel que observa a mudança do critério de ordenação
    ``` jsx
        const [ordem, setOrdem] = useState(null);
    ```

    c. Disparar mudança para ao mudar o select, mudar o atributo de ordenação
    ```jsx
        <select onChange={(evt) => setOrdem(evt.target.value)}>
            <option value="">Ordenar por</option>
            <option value="nome">Nome</option>
            <option value="preco">Preço</option>
            <option value="avaliacao">Avaliaçâo</option>
        </select>
    ```

    d. Criar um useEffect que escuta as mudanças no ordem:
    ``` jsx
         useEffect(() => {

            console.log('ordenar ' + ordem);
           
        
        }, [ordem]);
    ```

    e. Com a nova ordem, ordenar a lista

    ``` jsx
        useEffect(() => {
            if(listaBrinquedos?.length >0){
                const listaOrdenada = listaBrinquedos.sort(function(a,b) {
                    return (a[ordem] < b[ordem]) ? -1 : (a[ordem] > b[ordem]) ? 1 : 0;
                });

                console.log(listaBrinquedos);
                setListaBrinquedos([...listaOrdenada]);
            }
        }, [ordem]);
    ```