"use client";

import { useState } from 'react';

const CamadasDeImagens = ({ grupo, isAmpliado = false }) => {
    return grupo.map((src, imgIndex) => {
        
        // ==========================================
        // ⬇️ ANOTAÇÃO PARA VOCÊ VER:
        // O item com índice 0 é a CAMADA PRINCIPAL (Fundo).
        // Se você quiser mudar ou ajustar a camada principal, é aqui!
        // ==========================================
        const isBase = imgIndex === 0;

        return (
            <img 
                key={imgIndex}
                src={src} 
                alt={`Camada ${imgIndex + 1}${isAmpliado ? ' Ampliada' : ''}`} 
                className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                    isBase 
                        ? 'z-10' // <- CAMADA PRINCIPAL (Fundo)
                        : 'z-0 max-w-[70%] max-h-[70%] m-auto top-[15%]' // <- CAMADAS SOBREPOSTAS (Por cima)
                }`}
            />
        );
    });
};

export default function PaginaInicial({ gruposDeImagens }) {
    const [indiceGrupoAmpliado, setIndiceGrupoAmpliado] = useState(null);

    const listaDeGrupos = gruposDeImagens || [
        [
            "/Imagem/images-removebg-preview (2).png", // 👈 CAMADA PRINCIPAL (Sempre o primeiro item do array)
            "/Imagem/images (2).jpg",                  // Camada sobreposta
        ],
        [
            "/Imagem/images-removebg-preview (2).png", // 👈 CAMADA PRINCIPAL
            "/Imagem/camada-2a.png",                   // Camada sobreposta
        ],
        [
            "/Imagem/images-removebg-preview (2).png", // 👈 CAMADA PRINCIPAL
            "/Imagem/camada-3a.png",                    // Camada sobreposta                                       
        ],
          [
            "/Imagem/images-removebg-preview (2).png", // 👈 CAMADA PRINCIPAL
            "/Imagem/camada-3a.png"                    // Camada sobreposta                                       
        ],
    ];

    const grupoSelecionado = indiceGrupoAmpliado !== null ? listaDeGrupos[indiceGrupoAmpliado] : null;

    return (
        <main className="flex flex-col items-center p-6 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mt-15">
                {listaDeGrupos.map((grupo, index) => (
                    <div 
                        key={index}
                        onClick={() => setIndiceGrupoAmpliado(index)}
                        className="cursor-pointer rounded-lg shadow-md bg-white p-4 transition-transform hover:scale-105 flex flex-col items-center justify-center border border-gray-200"
                    >
                        <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden">
                            <CamadasDeImagens grupo={grupo} isAmpliado={false} />
                        </div>
                        <span className="text-xs text-gray-500 mt-2 ">Conjunto {index + 1}</span>
                    </div>
                ))}
            </div>

            {grupoSelecionado && (
                <div 
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                    onClick={() => setIndiceGrupoAmpliado(null)}
                >
                    <div 
                        className="relative bg-white p-6 rounded-lg shadow-2xl max-w-2xl max-h-[90vh] flex items-center justify-center" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-96 h-96 flex items-center justify-center overflow-hidden">
                            <CamadasDeImagens grupo={grupoSelecionado} isAmpliado={true} />
                        </div>

                        <button 
                            className="absolute top-2 right-2 bg-gray-200 text-black font-bold px-3 py-1 rounded-full shadow hover:bg-gray-300 z-20 cursor-pointer"
                            onClick={() => setIndiceGrupoAmpliado(null)}
                            aria-label="Fechar"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}