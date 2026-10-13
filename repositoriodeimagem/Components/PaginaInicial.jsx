"use client";

import { useState } from 'react';

const CamadasDeImagens = ({ grupo, isAmpliado = false }) => {
    return grupo.map((src, imgIndex) => {
        const isBase = imgIndex === 0;

        return (
            <img 
                key={imgIndex}
                src={src} 
                alt={`Camada ${imgIndex + 1}${isAmpliado ? ' Ampliada' : ''}`} 
                className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                    isBase 
                        ? 'z-10' 
                        : isAmpliado 
                            // 🎛️ MEDIDAS DA CAMADA SOBREPOSTA (AMPLIADA)
                            // Aqui você mexe na largura (w-) e altura (h-) de forma totalmente independente:
                            ? 'z-0 w-[70%] h-[60%] m-auto top-[20%] left-0 right-0' 
                            // 🎛️ MEDIDAS DA CAMADA SOBREPOSTA (CARD NORMAL)
                            : 'z-0 w-[70%] h-[60%] m-auto top-[20%] left-0 right-0'
                }`}
            />
        );
    });
};

export default function PaginaInicial({ gruposDeImagens }) {
    const [indiceGrupoAmpliado, setIndiceGrupoAmpliado] = useState(null);

    const listaDeGrupos = gruposDeImagens || [
        [
            "/Imagem/images-removebg-preview (2).png",
            "/Imagem/images (2).jpg",
        ],
        [
            "/Imagem/images-removebg-preview (2).png",
            "/Imagem/camada-2a.png",
        ],
        [
            "/Imagem/images-removebg-preview (2).png",
            "/Imagem/camada-3a.png",                        
        ],
        [
            "/Imagem/images-removebg-preview (2).png",
            "/Imagem/camada-3a.png"                        
        ],
    ];

    const grupoSelecionado = indiceGrupoAmpliado !== null ? listaDeGrupos[indiceGrupoAmpliado] : null;

    return (
        <main className="flex flex-col items-center p-6 w-full min-h-screen bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mt-10">
                {listaDeGrupos.map((grupo, index) => (
                    <div 
                        key={index}
                        onClick={() => setIndiceGrupoAmpliado(index)}
                        className="cursor-pointer rounded-xl shadow-sm hover:shadow-md bg-white p-4 transition-all duration-200 hover:-translate-y-1 flex flex-col items-center justify-center border border-gray-100"
                    >
                        <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden">
                            <CamadasDeImagens grupo={grupo} isAmpliado={false} />
                        </div>
                        <span className="text-xs font-medium text-gray-500 mt-3">Conjunto {index + 1}</span>
                    </div>
                ))}
            </div>

            {grupoSelecionado && (
                <div 
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity"
                    onClick={() => setIndiceGrupoAmpliado(null)}
                >
                    <div 
                        className="relative bg-white p-6 rounded-2xl shadow-2xl flex items-center justify-center animate-in fade-in zoom-in-95 duration-150"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-96 h-96 flex items-center justify-center overflow-hidden">
                            <CamadasDeImagens grupo={grupoSelecionado} isAmpliado={true} />
                        </div>

                        <button 
                            className="absolute top-3 right-3 bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold w-8 h-8 flex items-center justify-center rounded-full shadow transition-colors z-20 cursor-pointer"
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