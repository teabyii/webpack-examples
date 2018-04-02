export default function superalert(chars) {
  if (typeof chars === 'string') {
    alert(chars)
  } else {
    alert(JSON.stringify(chars))
  }
}
