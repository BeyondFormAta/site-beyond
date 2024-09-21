import imagem from "../images/imagem predio.png"

function Empresa(){
    return(
        <div className="h-screen bg-preto relative flex items-center">
            <img src={imagem} className="h-[450px]"/>
            <div className="ml-28">
                <h1 className="text-white text-5xl font-bold mb-6">Perfil da <br/>Empresa</h1>
                <p className="text-white text-lg mb-10">Fundada em 2024, a BeyondForm é uma empresa de<br/> serviços  completos, que através de estratégias de<br/> marketing digital, buscamos aprimorar os resultados<br/> da sua empresa</p>
                <button className="bg-cinza text-white w-44 h-16 text-lg leading-[17px]">Entrar em <br/>contato</button>
            </div>
        </div>
    )
}

export default Empresa