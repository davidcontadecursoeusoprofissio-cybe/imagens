import Image from "next/image";

import Nav from '@/Components/Nav';
import NavDesenho from '@/Components/NavDesenho';
import PaginaInicial from '@/Components/PaginaInicial';
import Marca from '@/Components/Marca';
import Fundo from '@/Components/Fundo'

export default function Home() {
  return(

  <>
    <Nav />
    <NavDesenho/>
    <Fundo/>
    <PaginaInicial/>
    <Marca/>
  </>
  )
}