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

    const id = "";
    const updatedProduct = {
      name: "Alexa",
      value: 400,
    };

    api.put(`products/${id}`, updatedProduct).then((response: any) => {
      console.log(response.data);
      const updatedProdutos = produtos.map((produto) =>
      produto.id === id ? { ...produto, ...updatedProduct } : produto
      );
      setProdutos(updatedProdutos);
    })
      .catch((error: any) => {
        console.error("Erro ao atualizar o produto:", error);
      });
  }

  function removerProductId(id: any) {
    
    api.delete(`products/${id}`).then((response) => {
      console.log(response.data);
      const removeProdutos = produtos.filter(produto => produto.idProduto !== id);
      console.log("ID do produto:", produtos);
      setProdutos(removeProdutos);
    }) 
    .catch((error: any) => {
      console.log("ID do produto a ser deletado:", id);
      

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
                    <img src={produto.url_img} alt="" />
                    <div className='template_paragrafo'>
                      <p className='titulo'>{produto.name}</p>
                      <p className='description'>{produto.description}</p>
                      <p className='value'>{produto.value}</p>
                      <div className='sales'>
                      <button>comprar</button>
                      <input type="number" placeholder='0' />
                      <button onClick={() => removerProductId(produto.idProduto)}>Delete</button>
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
