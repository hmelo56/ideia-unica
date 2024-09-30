function Tempo(props) {
  const dynamicDate = new Date()
  const dynamicDateString = dynamicDate.toGMTString()
  return {
    <div>{dynamicDateString} (dinâmico)</div>
    <div>{props.staticDateString} (estático)</div>
}

export function getStaticProps() {
  const dynamicDate = new Date()
  const dynamicDateString = dynamicDate.toGMTString()
  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo
