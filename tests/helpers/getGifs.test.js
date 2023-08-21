import { getGifs } from '../../src/helpers';

describe('Tests in getGifs.js', () => {
  test('Should return an array of Gifs', async () => {
    const gifs = await getGifs('Metal Gear Solid');

    expect(gifs.length).toBeGreaterThan(0); // Almenos tenga 1 elemento
    expect(gifs[0]).toEqual({ // Recibir un objeto ocn las propiedades indicadas
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});