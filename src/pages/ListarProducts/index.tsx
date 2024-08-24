import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

function ListarProducts() {



  const [produtos, setProdutos] = useState<any[]>([]); // Usamos `any[]` temporariamente se não temos um tipo específico.


  useEffect(
    () => {
      document.title = "Lista de produtos";

      listarProdutos();
      editarProduct();
      removerProduct();

    }, []
  )

  function listarProdutos() {
    // Implementar chamada para a API de listagem de produtos
    api.get("products").then((response: any) => {
      console.log(response.data);
      // Implementar aqui a lógica para renderizar os produtos na tela
      setProdutos(response.data);
    });
  }


  function editarProduct() {

    const id = ""; // Adicione o ID do produto que deseja editar
    const updatedProduct = {
      name: "Alexa",
      value: 400,
    };

    api.put(`products/${id}`, updatedProduct).then((response: any) => {
      console.log(response.data);
      // Implementar aqui a lógica para atualizar o produto na lista
      const updatedProdutos = produtos.map((produto) =>
        produto.id === id ? { ...produto, ...updatedProduct } : produto
      );
      setProdutos(updatedProdutos);
    })
      .catch((error: any) => {
        console.error("Erro ao atualizar o produto:", error);
      });
  }

  function removerProduct() {
    const removeId = "005ba499-8f92-42b9-94a6-f453fd8d5b0f";
    api.delete(`products${removeId}`).then((response) => {
      console.log(response.data);
      // Implementar aqui a lógica para remover o produto da lista
      const removeProdutos = produtos.filter((produto) => produto.id !== removeId);
      setProdutos(removeProdutos);
    });

  }


  return (
    <>
      <main>
        <div className='container_header'>
          <div className='header'>
            <h2>Produtos</h2>
            <button>Listar produtos</button>
          </div>
        </div>

        <div className='main'>
          {produtos.length === 0 ? (
            <p>Carregando produtos...</p>
          ) : (
            <ul>
              {produtos.map((produto) => (
                <li key={produto.id}>
                  <p>Nome: {produto.name}</p>
                  <p>Valor: {produto.value}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </>
  )
}

export default ListarProducts
