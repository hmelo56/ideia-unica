import { useState } from "react"

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>
      <Contador />
      <a href="/">Acessar página Home</a>
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

export default Sobre
