import { Link } from "react-router-dom";
import ListarProducts from "../../pages/ListarProducts";

import "./style.css"

export default function Header() {

    return (
        <>
            <div className="container">
                <div className="botoes">
                    <nav>
                        <Link className="btn" to="/"> Lista de produtos</Link>
                        <Link className="btn" to="cadastrar">Cadastrar produto</Link>
                    </nav>
                </div>
            </div>
        </>
    )
}