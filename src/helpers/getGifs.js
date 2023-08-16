
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ybQVEsQXvxrGKMX3CYoBIUtiFFndiirk&q=${category}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    image: gif.images.downsized_medium.url
  }));

  return gifs;
};