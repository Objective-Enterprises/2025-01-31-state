export default function Setting(props) {
  const invited = props.guests.includes(props.name)
  return (
    <button
      onClick={() => {
        if (invited) {
          props.uninvite(props.name)
        } else {
          props.invite(props.name)
        }
      }}
    >
      {props.name}: {invited ? 'Invited' : 'Not Invited'}
    </button>
  )
}