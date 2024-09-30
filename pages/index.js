import { useState } from "react"

function Home() {
  return (
    <!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300&family=Open+Sans:wght@300;400&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DevLinks</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div id="container">
      <div id="profile">
        <img
          src="./assets/assets/avatar.png"
          alt="Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
        />
        <p>@maykbrito</p>
      </div>
      <div id="switch" onclick="toggleMode()">
        <button></button>
        <span></span>
      </div>
      <ul>
        <li>
          <a href="#">Inscrever-se no NLW</a>
        </li>
        <li>
          <a href="#">Baixar meu e-book</a>
        </li>
        <li>
          <a href="https://github.com/maykbrito" target="_blank"
            >Ver meu portifólio</a
          >
        </li>
        <li>
          <a href="https://rocketseat.com.br/explorer" target="_blank"
            >Conheça o Explorer</a
          >
        </li>
      </ul>
      <div id="social-links">
        <a href="https://github.com/hmelo56 " target="_blank"
          ><ion-icon name="logo-github"></ion-icon
        ></a>
        <a href="https://instagram.com/hmelo56 " target="_blank"
          ><ion-icon name="logo-instagram"></ion-icon
        ></a>
        <a href="https://youtube.com/MarcosHenriqueMelo " target="_blank"
          ><ion-icon name="logo-youtube"></ion-icon
        ></a>
        <a
          href="https://www.linkedin.com/in/marcos-henrique-de-melo-453832135/ "
          target="_blank"
          ><ion-icon name="logo-linkedin"></ion-icon
        ></a>
      </div>
      <footer>
        Feito com ♥ pela
        <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>
      </footer>
    </div>

    <script
      type="module"
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
    ></script>

    <script src="./script.js"></script>
  </body>
</html>
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
