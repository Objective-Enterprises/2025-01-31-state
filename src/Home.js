export default function Home (props) {
  if (props.loading) {
    return <></>
  }
  return (
    <>
      <img src={props.image} width={300} alt='dog'/>
    </>
  )
}