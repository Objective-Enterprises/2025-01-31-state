import { useState } from 'react'
import Setting from './Setting'

export default function App () {
  const [guests, setGuests] = useState(['Dorothy', 'Zelda', 'Tallulah'])
  function invite (name) {
    const newGuests = [...guests, name]
    setGuests(newGuests)
  }
  function uninvite (name) {
    const newGuests = guests.filter(guest => guest !== name)
    setGuests(newGuests)
  }
  const guestItems = guests.map(guest => {
    return <div key={guest}>{guest}</div>
  })

  return (
    <>
      <h1>Party App</h1>
      <h2>Guests</h2>
      {guestItems}
      <Setting
        name='Dorothy'
        guests={guests}
        uninvite={uninvite}
        invite={invite}
      />
      <Setting
        name='Zelda'
        guests={guests}
        uninvite={uninvite}
        invite={invite}
      />
      <Setting
        name='Tallulah'
        guests={guests}
        uninvite={uninvite}
        invite={invite}
      />
    </>
  )
}