import { useState } from "react"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Contador />
      <a href="/sobre">Acessar página Sobre</a>
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
