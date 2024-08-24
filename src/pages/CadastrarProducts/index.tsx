import { useState } from "react";
import api from "../../services/api";
import './style.css'


function CadastrarProducts() {

    const [product, setProduct] = useState<any[]>([]);
    const [name, setName] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [description, setDescription] = useState<string>("");


    function CadastrarProducts(event: any) {
        event.preventDefault();

        const formData = new FormData();

        formData.append("name", name)
        formData.append("value", value)
        formData.append("description", description);


        api.post("products", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response: any) => {
            console.log(response.data);
            console.log([...formData.entries()]);

            alert("Produto adicionado com sucesso!!!");
        })
            .catch((error: any) => {
                console.error("Erro ao adicionar o produto:", error);
                console.log([...formData.entries()]);

            });
    }

    return (
        <>
            <main>
                <div className="">
                    <h1>Cadastrar Produtos</h1>
                </div>
                <div className="form">
                    <form onSubmit={CadastrarProducts} method="POST">
                        <input
                            type="text"
                            placeholder="Nome do produto"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Valor do produto"
                            value={value}
                            //A função de callback é executada após a conclusão da função principal
                            //A função callback fica esperando o evento acontecer.
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Descrição do produto"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            </main>
        </>
    )


}

export default CadastrarProducts;