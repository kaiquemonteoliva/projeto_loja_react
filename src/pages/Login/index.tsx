import "./style.css"

export default function Login() {
    return (
        <>
            <div className="container_login">
                <div className="container_box">
                    <form>
                        <input type="text" placeholder="Usuário" />
                        <input type="password" placeholder="Senha" />
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
           
        </>
    )
}