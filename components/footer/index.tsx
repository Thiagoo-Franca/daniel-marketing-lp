export default function Footer() {
    return (
        <footer className="bg-black w-full py-8 md:py-24">
            <div className="flex flex-col  gap-4 w-full max-w-7xl mx-auto justify-between px-2">

            <section className='flex flex-col md:flex-row  gap-4 w-full max-w-7xl mx-auto justify-between px-2'>
                <div>
                    <h5 className="text-md md:text-2xl font-bold text-white">
                    DANIEL <span className="text-secondary">MARKETING</span>
                    </h5>
                <p className="text-gray-400">Conteúdo audiovisual que posiciona marcas e gera resultado real.</p>
                    </div>
                <div>
                    <h5 className="text-sm md:text-md font-normal text-gray-400">CONTATO</h5>
                    <p className="text-gray-400">
                        WhatsApp: (73) 98827-7809
                    </p>
                    <p className="text-gray-400">
                        E-mail: francadaniel8257@gmail.com
                    </p>
                </div>
                <div>
                    <h5 className="text-sm md:text-md font-normal text-gray-400">REDES SOCIAIS</h5>
                    <a className="text-gray-400 hover:text-gray-300" href="https://instagram.com/daniielmarketing" target="_blank" rel="noopener noreferrer">
                        instagram
                    </a>
                </div>
            </section>
            <section className="flex flex-col md:flex-row w-full max-w-7xl mx-auto justify-between px-2 text-center text-gray-500 text-sm gap-2 mt-4">
                <p>&copy; {new Date().getFullYear()} Daniel Marketing. Todos os direitos reservados.</p>
                <p>Desenvolvido por <a className="text-secondary hover:text-gray-300" href="https://github.com/Thiagoo-Franca" target="_blank" rel="noopener noreferrer">Thiago Oliveira França</a></p>
            </section>
            </div>
        </footer>
    )
}