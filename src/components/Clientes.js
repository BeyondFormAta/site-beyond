import valentina from '../images/clients/Valentina-logo.png'
import dinamica from '../images/clients/logo dinamica.jpg'
import carolina from '../images/clients/image (1).png'

const cliente = [
    {
        imagem: valentina,
        nome: 'Valentina Veículos'
    },
    {
        imagem: dinamica,
        nome: "Dinâmica Oficina Mecânica"
    },
    {
        imagem:carolina,
        nome: 'Carolina Rocha Lash'
    }
]

function Clientes (){
    return(
        <section className="h-svh bg-white content-center">
            <div className='ml-24'>
                <h1 className="text-black text-5xl font-bold mb-4">Nossos Clientes</h1>
                <p className="text-black text-lg">Desde o  começo, prestamos serviços de confiança a nossos clientes. Tivemos a honra de<br/> sermos a empresa na escolha das  seguintes corporações:</p>
            </div>
            <div className='flex justify-around items-center mt-24 w-full'>
                {cliente.map((item)=>(
                    <div className='max-w-fit'>
                        <img src={item.imagem} alt={`Logo ${item.nome}`} className='size-72'/>
                        <div className='w-72 h-14 bg-preto text-center content-center'><p className='text-white text-xl font-bold'>{item.nome}</p></div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Clientes