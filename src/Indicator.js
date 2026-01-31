export default function Indicator (props) {
  if (props.loading) {
    return <div>Loading image...</div>
  }
  return <div>Image loaded! <button onClick={props.download}>Download</button></div>
}