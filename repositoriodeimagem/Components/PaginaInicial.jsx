"use client";

import { useState } from 'react';

export default function PaginaInicial({ gruposDeImagens }) {
    const [indiceGrupoAmpliado, setIndiceGrupoAmpliado] = useState(null);

    const listaDeGrupos = gruposDeImagens || [
        [
            "/Imagem/images-removebg-preview (2).png", // Base (Fundo)
            "/Imagem/images (2).jpg",                   // Sobreposta 1
        ],
        [
            "/Imagem/images-removebg-preview (2).png", // Base (Fundo)
            "/Imagem/camada-2a.png",                  // Sobreposta 1
        ],
        [
            "/Imagem/images-removebg-preview (2).png", // Base (Fundo)
            "/Imagem/camada-3a.png",                  // Sobreposta 1
            "/Imagem/camada-3b.png"                   // Sobreposta 2
        ],
    ];

    return (
        <div className="flex flex-col items-center p-6 w-full">
            <h1 className="text-xl font-bold mb-6">Galeria de Conjuntos Sobrepostos</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {listaDeGrupos.map((grupo, index) => (
                    <div 
                        key={index}
                        className="cursor-pointer rounded-lg shadow-md bg-white p-4 transition-transform hover:scale-105 flex flex-col items-center justify-center border border-gray-200"
                        onClick={() => setIndiceGrupoAmpliado(index)}
                    >
                        {/* Container Normal com overflow-hidden para travar qualquer excesso */}
                        <div className="relative w-48 h-48 flex items-center justify-center overflow-hidden">
                            {grupo.map((src, imgIndex) => {
                                const isBase = imgIndex === 0;
                                return (
                                    <img 
                                        key={imgIndex}
                                        src={src} 
                                        alt={`Camada ${imgIndex + 1}`} 
                                        className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                                            isBase ? 'z-10' : 'z-0'
                                        }`}
                                        style={!isBase ? {
                                            // Mantém a camada interna estritamente dentro da área útil, sem vazar
                                            maxWidth: '70%',
                                            maxHeight: '70%',
                                            margin: 'auto',
                                            top: '15%'
                                        } : {}}
                                    />
                                );
                            })}
                        </div>
                        <span className="text-xs text-gray-500 mt-2">Conjunto {index + 1}</span>
                    </div>
                ))}
            </div>

            {/* Modal / Overlay para o Zoom */}
            {indiceGrupoAmpliado !== null && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setIndiceGrupoAmpliado(null)}
                >
                    <div className="relative bg-white p-6 rounded-lg shadow-2xl max-w-2xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        
                        {/* Container Ampliado com overflow-hidden */}
                        <div className="relative w-96 h-96 flex items-center justify-center overflow-hidden">
                            {listaDeGrupos[indiceGrupoAmpliado].map((src, imgIndex) => {
                                const isBase = imgIndex === 0;
                                return (
                                    <img 
                                        key={imgIndex}
                                        src={src} 
                                        alt={`Camada ${imgIndex + 1} Ampliada`} 
                                        className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${
                                            isBase ? 'z-10' : 'z-0'
                                        }`}
                                        style={!isBase ? {
                                            maxWidth: '70%',
                                            maxHeight: '70%',
                                            margin: 'auto',
                                            top: '15%'
                                        } : {}}
                                    />
                                );
                            })}
                        </div>

                        <button 
                            className="absolute top-2 right-2 bg-gray-200 text-black font-bold px-3 py-1 rounded-full shadow hover:bg-gray-300 z-20"
                            onClick={() => setIndiceGrupoAmpliado(null)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}