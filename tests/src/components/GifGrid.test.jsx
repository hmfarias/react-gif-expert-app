import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../../src/components/GifGrid';

// A TENER EN CUENTA: GifGrid utiliza un custon hook que se llama useFetchGifs, pero como debemos hacer pruebas unitarias e independientes, NO va a ser responsabilidad de esta prueba testear ese custon hook. Vamos a asumir que ese custon hook ya esta probado en otra prueba  y aquí funciona correctamente y solo vamos a simular su funcionamiento usando un MOCK y estableciendo directamente los valores esperados de retorno.
//Para hacer esto primero lo importo
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';
//ahora uso jest.mock() y esto crea el mock
jest.mock('../../../src/hooks/useFetchGifs');

describe('<GifGrid /> component tests', () => {
	const category = 'Nesdimug';

	test("should show 'Loading ...' initially", () => {
		//primero simulo el useFetchGifs como si hubiera funcionado correctamente (cosa que se asume) y establezco lo que me devolvió
		useFetchGifs.mockReturnValue({
			images: [], //inicialmente devuelve un array vacio
			isLoading: true, //inicialmente esta cargando o sea en true
		});

		render(<GifGrid category={category} />);
		// screen.debug();

		expect(screen.getByText('Loading ...')); //verifico que en algun lugar aparezca el texto Loading... que es el que aparece cuando se inicializa el componente y sin llamar al custom hook useGetchGifs (que es el que despues trae los gifs)
		expect(screen.getByText(category)); //verifico que en algun lugar aparezca el nombre de la categoría
	});

	test('should show items after Custom Hook useFetchGifs is called ', () => {
		//primero simulo el useFetchGifs como si hubiera funcionado correctamente (cosa que se asume) y establezco lo que me devolvió
		const gifs = [
			{
				id: 'ABC',
				title: 'One-punch',
				url: 'https://localhost/nesdimug.jpg',
			},
			{
				id: 'DEF',
				title: 'Saitama',
				url: 'https://localhost/saitama.jpg',
			},
			{
				id: 'GHI',
				title: 'Goku',
				url: 'https://localhost/goku.jpg',
			},
		];
		useFetchGifs.mockReturnValue({
			images: gifs, //inicialmente devuelve un array vacio
			isLoading: false, //inicialmente esta cargando o sea en true
		});

		render(<GifGrid category={category} />);
		// screen.debug();
		expect(screen.getAllByRole('img').length).toBe(3); //traigo todas las img y cuento que sean la misma cantidad que lo simulado, en este caso 3
	});
});
