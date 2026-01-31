import Setting from "./Setting"

export default function Settings(props) {
  return (
    <>
      <h2>Settings</h2>
      <Setting
        name='Dorothy'
        guests={props.guests}
        uninvite={props.uninvite}
        invite={props.invite}
      />
      <Setting
        name='Zelda'
        guests={props.guests}
        uninvite={props.uninvite}
        invite={props.invite}
      />
      <Setting
        name='Tallulah'
        guests={props.guests}
        uninvite={props.uninvite}
        invite={props.invite}
      />
    </>
  )
}