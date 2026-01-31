export default function GuestList (props) {
  const guestItems = props.guests.map(guest => {
    return <div key={guest}>{guest}</div>
  })
  return (
    <>
      <h2>Guests</h2>
      {guestItems}
    </>
  )
}