import apertoDeMao from '../images/aperto de mao.png'
import whatsapp from '../images/icons/whatsapp.png'
import instagram from '../images/icons/instagram.png'
import linkedin from '../images/icons/logotipo-do-linkedin.png'
import behance from '../images/icons/behance.png'

const textos = [
    {
        nome: 'Redes sociais',
        descricao: '@studiobeyondform'
    },
    {
        nome:'Telefone',
        descricao:'(18) 99641-8659'
    },
    {
        nome:'E-mail',
        descricao:'beyondformatasp@gmail.com'
    }
]

const icons = [whatsapp, instagram, linkedin, behance]

function Contato (){
    return(
        <section className='h-screen bg-preto flex justify-around items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl text-white font-bold mb-5'>Vamos trabalhar juntos.</h1>
                <img src={apertoDeMao} alt='Imagem de aperto de mão' className='w-[700px]'/>
            </div>
            <div className='space-y-10'>
                {textos.map((item)=>(
                    <div>
                        <h1 className='text-3xl text-cinza font-bold'>{item.nome}</h1>
                        <p className='text-2xl text-white'>{item.descricao}</p>
                    </div>
                ))}
                <div className='flex space-x-16'>
                    {icons.map((item)=>(
                        <img src={item} alt='Icon' className='w-12 cursor-pointer'/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contato