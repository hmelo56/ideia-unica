import { useState } from "react"
import Link from "next/link"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
  )
}

function Contador() {
  const [contador, setContador] = useState(1)
  function adcionarContador() {
    setContador(contador + 1)
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adcionarContador}>Adiconar</button>
    </div>
  )
}

export default Home
