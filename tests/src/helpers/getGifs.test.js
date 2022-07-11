import { getGifs } from '../../../src/helpers/getGifs';

describe('getGifs() function tests', () => {
	const category = 'Star Wars';

	test('should Return an array of gifs', async () => {
		const gifs = await getGifs(category);

		expect(gifs.length).toBeGreaterThan(0); //esto solo evalua que se reciba un arreglo que no esté vacio

		//lo importante sería evaluar que los elementos del arreglo traigan un id un titulo y una url
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			url: expect.any(String),
		});
	});
});
