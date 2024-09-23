import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../services/api'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import ImgCafeTable from '../../assets/kit_cafe.png'
function ListarProducts() {



  const [produtos, setProdutos] = useState<any[]>([]);

  useEffect(
    () => {
      document.title = "Lista de produtos";

      listarProdutos();

    }, []
  )

  function listarProdutos() {
    api.get("products").then((response: any) => {
      console.log(response);
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

  document.querySelectorAll('.description').forEach(function(desc) {
   desc.innerHTML = desc.innerHTML.replace(/,/, '<br>');
  });
  


  return (
    <>
      <main>
        <div className='container_header'>
          <h2>linha de café gourmet</h2>
        </div>
        {produtos.length === 0 ? (<div className='not_upload'>
          <p>Carregando produtos...</p>
        </div>) : (
          <div className='tabela_ul'>
            <ul>
              {produtos.map((produto) => (
                <li key={produto.id}>
                  <div className='template_produto'>
                    <img src={"http://localhost:8080/static/img/" + produto.url_img} alt="" />
                    <div className='template_paragrafo'>
                      <p className='titulo'>{produto.name}</p>
                      <p className='description'>{produto.description}</p>
                      <p className='value'>{produto.value}</p>
                      <div className='sales'>
                      <button>comprar</button>
                      <input type="number" placeholder='0' />
                      </div>
                    </div>

                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}


      </main>
    </>
  )
}

export default ListarProducts
