export const getAll = () =>
  // fetch("http://0.0.0.0:5000/api/v1/resources/all") // local
  fetch("http://216.200.116.139/api/v1/resources/all") // remote
    .then(res => res.json())
    .then(data => data)