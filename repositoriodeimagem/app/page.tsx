import Image from "next/image";

import Nav from '@/Components/Nav';
import NavDesenho from '@/Components/NavDesenho';
import PaginaInicial from '@/Components/PaginaInicial';

export default function Home() {
  return(

  <>
    <Nav />
    <NavDesenho/>
    <PaginaInicial/>
  </>
  )
}