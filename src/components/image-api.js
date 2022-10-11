function fetchImages(searchQuery, page = 1) {
  const url = 'https://pixabay.com/api/';
  const myKey = '29632553-8bd9139d6166d4f2b01812120';
  const filter = 'image_type=photo&orientation=horizontal&per_page=12';

  return fetch(
    `${url}?key=${myKey}&q=${searchQuery}&${filter}&page=${page}`
  ).then(response => response.json());
}

export default fetchImages;