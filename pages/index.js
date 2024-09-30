import { useState } from "react"

function Home() {
  return (
    <div>
      <h1>Sejam Bem-Vindos!</h1>
      <Contador />
       <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="servicos.html">Serviços</a></li>
        <li><a href="convenios.html">Convênios</a></li>
        <li><a href="parcerias.html">Parcerias</a></li>
        <li><a href="comite.html">Comitê</a></li>
        <li><a href="contatos.html">Contatos</a></li>
    </ul>
    </div>
  )
}

function Contador(){
  const [contador, setContador] = useState(1);
  function adcionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <div>{contador}</div>
      <button onClick={adcionarContador}>Adiconar</button>
    </div>
  )
}

export default Home
