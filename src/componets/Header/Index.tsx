import { Link } from "react-router-dom";
import ListarProducts from "../../pages/ListarProducts";

import "./style.css"

export default function Header() {

    return (
        <>
            <header>
                <div className="container_annunciment_bar">entregamos para todo brasil</div>
                <div className="header_nav">

                    <nav>
                        <Link className="btn" to="/">listar produtos</Link>
                        <Link className="btn" to="cadastrar">cadastrar produto</Link>
                        <Link className="btn" to="sobre">sobre</Link>
                        <Link className="btn" to="contato">contato</Link>
                    </nav>

                </div>
            </header>
            
        </>
    )
}