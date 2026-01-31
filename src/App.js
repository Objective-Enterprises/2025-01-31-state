import { useEffect, useState } from 'react'
import GuestList from './GuestList'
import Settings from './Settings'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Indicator from './Indicator'

export default function App() {
  const [guests, setGuests] = useState(['Dorothy', 'Zelda', 'Tallulah'])
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)
  async function download() {
    setLoading(true)
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    setImage(data.message)
    setLoading(false)
  }
  useEffect(() => {
    download()
  }, [])
  function invite(name) {
    const newGuests = [...guests, name]
    setGuests(newGuests)
  }
  function uninvite(name) {
    const newGuests = guests.filter(guest => guest !== name)
    setGuests(newGuests)
  }
  return (
    <BrowserRouter>
      <h1>Dog Party App</h1>
      <Indicator loading={loading} download={download} />
      <div>
        <Link to="/">Home</Link> | <Link to="/guests">Guests</Link> | <Link to="/settings">Settings</Link>
      </div>
      <Routes>
        <Route
          path='/'
          element={<Home image={image} loading={loading} />}
        />
        <Route path='/guests' element={<GuestList guests={guests} />} />
        <Route
          path='/settings'
          element={
            <Settings
              guests={guests}
              invite={invite}
              uninvite={uninvite}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}