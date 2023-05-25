import React, { useEffect, useState, useParams } from 'react'

function BrinquedoDetalhesPage() {

  const { id } = useParams();
  const { produto, setProduto } = useState(null);

  useEffect(() => {
    const loadProduto = async () => {
      const result = await fetch(`https://dummyjson.com/products/${id}`);
      const p = await result.json();

      setProduto({
        id: p.id,
        nome: p.title,
        preco: p.price,
        avaliacao: p.rating,
        estoque: p.stock
      });
    }
    if(id)
      loadProduto();
  }, [id])

  return (
    <div>{produto?.nome}</div>
  )
}

export default BrinquedoDetalhesPage