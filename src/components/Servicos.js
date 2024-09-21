import imagemCaneta from "../images/caneta.png"

function Servicos(){
    
    const servicos = [
        {
            nome: 'Criação de Landing Page',
            descricao:'Um site personalzado e dinâmico par a chamar a atenção dos seus novos clientes'
        },
        {
            nome: 'Identidade Visual',
            descricao:'Criação de uma marca forte e memorável para sua empresa, aumentando sua conversão'
        },
        {
            nome: 'Videomaker',
            descricao:'Gravação de vídeos completamente personalizados para anúncios da sua empresa.'
        }
    ]

    return(
        <section className="h-screen bg-preto relative flex items-center border-b-2 border-white">
            <div className="ml-20 space-y-12">
                <h1 className="text-5xl text-white font-bold mb-2">Nossos<br/> Serviços</h1>
                <img src={imagemCaneta} alt="imagem de caneta" className="h-72"/>
            </div>
            <div className="ml-48 w-[500px] space-y-12">
              {servicos.map((item, index)=>(
                <div>
                    <li key={index} className="flex items-center">
                        <h1 className="text-cinza text-5xl font-semibold mr-3">{`0${index+1}`}</h1>
                        <span className="text-white text-4xl font-semibold">{item.nome}</span>
                    </li>
                    <p className="text-white text-lg ml-16">{item.descricao}</p>
                </div>
              ))}  
            </div>
        </section>
    )
}

export default Servicos