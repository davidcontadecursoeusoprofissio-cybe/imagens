export default function NavDesenho() {
    return (
        <nav className="flex flex-col w-full bg-white -mt-34 ">
            {/* Seus links ou itens do menu */}
            <div className="flex gap-5 px-5 py-4 items-center">
                <a href="#" className="no-underline text-gray-800 font-medium"></a>
                <a href="#" className="no-underline text-gray-800 font-medium"></a>
                <a href="#" className="no-underline text-gray-800 font-medium"></a>
            </div>

            {/* A imagem fazendo o papel da linha colorida */}
            <img 
                src="/Imagem/images (1).jpg" 
                alt="Linha decorativa" 
                className="w-full h-2 object-cover block h-14" 
            />
        </nav>
    );
}