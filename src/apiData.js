export const getAll = () =>
  // fetch("http://0.0.0.0:5000/api/v1/resources/all") // local
  fetch("http://api.williamgeorgecook.com/api/v1/resources/all") // remote
    .then(res => res.json())
    .then(data => data)

export const getLatest = () =>
  // fetch("http://0.0.0.0:5000/api/v1/resources/latest") // local
  fetch("http://api.williamgeorgecook.com/api/v1/resources/latest") // remote
    .then(res => res.json())
    .then(data => data)