import fundo from "../images/Home.png"
import logo from "../images/Logo beyond.png"

function Home(){
    return(
        <div className="h-screen">
            <img src={fundo} className="w-full h-full absolute z-[-1]" alt="imagem de fundo"/>
            <div className="flex flex-col items-start ml-12">
                <img src={logo} alt="logo beyond" className="w-44 ml-[-30px] mt-20 mb-64 "/>
                <h1 className="text-white text-8xl font-bold mb-5">BeyondForm</h1>
                <p className="text-cinza text-3xl font-semibold mb-8">Transforme sua presença online conosco</p>
                <button className="bg-cinza text-white w-36 h-16 text-lg leading-[17px]">Entrar em <br/>contato</button>
            </div>
        </div>
    )
}

export default Home