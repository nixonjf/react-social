export function getList() {
  return fetch('http://localhost:82/api/index')
    .then(data => data.json())
}






