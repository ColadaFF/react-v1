const root = 'https://jsonplaceholder.typicode.com';
const lessThan10 = (item, index) => index < 10;

function getPhotos() {
  return fetch(`${root}/photos`)
    .then(response => response.json())
    .then(data => data.filter(lessThan10));
}

export default {
  getPhotos,
};
