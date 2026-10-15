export default function Nav() {
    return (
        <nav className="bg-blue-400 h-12 text-white mt-14">
            <h1 className="mt-3 ms-5">My App</h1>
            
            <ul className="flex gap-4 text-[14px] ms-280 -mt-5 relative z-10">
                <li><a href="http://localhost:3000/">Home</a></li>
                <li><a href="http://localhost:3000/Page1">Favoritos</a></li>
            </ul>
            
            <img src="/Imagem/3092885-seta-para-baixo-icone-de-glifo-preto-vetor-removebg-preview.png" alt="Seta para mostra opções" className="w-15 h-10 ms-308 -mt-8" />
        </nav>
    )
}