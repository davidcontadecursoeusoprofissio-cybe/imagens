"use client"
import { useState } from "react"

export default function PaginaInicial() {
  const [imagemprincipal] = useState([
    ["/Imagem/images (2).jpg", "/Imagem/images-removebg-preview (2).png"],
    ["/Imagem/images (1.1).jpg", "/Imagem/images-removebg-preview (2).png"],
    ["/Imagem/images (1).jpg", "/Imagem/images-removebg-preview (2).png"],
    ["/Imagem/images (1.0).jpg", "/Imagem/images-removebg-preview (2).png"],
    ["/Imagem/images (1.2).jpg", "/Imagem/images-removebg-preview (2).png"],
    ["/Imagem/images (1.3).jpg", "/Imagem/images-removebg-preview (2).png"],
    ["/Imagem/images (1.4).jpg", "/Imagem/images-removebg-preview (2).png"],
    ["/Imagem/Hellspawn.webp", "/Imagem/images-removebg-preview (2).png"]
  ])

  return (
    /* Container principal com display flex e flex-wrap para ir para a linha de baixo */
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      {imagemprincipal.map((parDeImagens, index) => {
        const imagemBaixo = parDeImagens[0]
        const imagemCima = parDeImagens[1]

        return (
          /* O pai precisa ser relative para segurar a posição das imagens sobrepostas */
          <div key={index} style={{ position: "relative", width: "300px", height: "300px" }}>
            
            {/* Imagem que fica no fundo */}
            <img 
              src={imagemBaixo} 
              alt="Fundo" 
              style={{ width: "70%", height: "70%", display: "block", position: "absolute", left: 38, top: 80 }} 
            />
            
            {/* Imagem que fica EM CIMA da outra */}
            <img 
              src={imagemCima} 
              alt="Em cima" 
              style={{ 
                position: "absolute", 
                top: 30, 
                left: 0, 
                width: "100%", 
                height: "100%" 
              }} 
            />
            
          </div>
        )
      })}
    </div>
  )
}