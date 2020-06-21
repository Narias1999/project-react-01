function getData(URL) {
  return fetch(URL).then(data => data.json());
}

export default getData;
