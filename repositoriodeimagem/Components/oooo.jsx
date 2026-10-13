"use client"
import { useState, useRef } from "react"

export default function PaginaInicial() {
  const [imagemprincipal, setImagemprincipal] = useState([])

  const Imagem1 = useRef(null)
  const Imagem2 = useRef(null)

  function adicionarImagens() {
    const caminho1 = Imagem1.current.value
    const caminho2 = Imagem2.current.value

    if (caminho1 && caminho2) {
      setImagemprincipal(prev => [...prev, [caminho2, caminho1]])
    }
  }

  return (
    <div>
      <div>
        <label>/Imagem/images-removebg-preview (2).png </label>
        <input type="text" ref={Imagem2} onChange={adicionarImagens} placeholder="Cole o link aqui" />
      </div>

      <div>
        <label>/Imagem/images (2).jpg </label>
        <input type="text" ref={Imagem1} onChange={adicionarImagens} placeholder="Cole o link aqui" />
      </div>

      <div>
        {imagemprincipal.map((parDeImagens, index) => {
          const url2 = parDeImagens[0]
          const url1 = parDeImagens[1]

          return (
            <div key={index}>
              <p>Par {index + 1}</p>
              
              <img src={url2} alt="Imagem 2" />
              <img src={url1} alt="Imagem 1" />
            </div>
          )
        })}
      </div>
    </div>
  )
}