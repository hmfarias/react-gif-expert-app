import { render, screen } from '@testing-library/react';
import { GifItem } from '../../../src/components/GifItem';

describe('<Gifitem /> component tests', () => {
	const title = 'Nesdimug';
	const url = 'http://www.notredamejoyas.com.ar/';

	test('should be the same as Snapshot', () => {
		//inicializacion
		// estímulo
		const { container } = render(<GifItem title={title} url={url} />);
		// console.log(container);
		//observar el comportamiento esperado
		expect(container).toMatchSnapshot();
	});

	test('should show the image with the URL and the ALT indicated', () => {
		render(<GifItem title={title} url={url} />);

		// //Puedo hacerlo así:
		// //primero tomo la imagen u verifico que el url que tenga sea igual que el enviado
		// // console.log(screen.getByRole('img').src);
		// expect(screen.getByRole('img').src).toBe(url);
		// //y lo mismo para el ALT
		// expect(screen.getByRole('img').alt).toBe(title);

		//O mucho mejor hacerlo usando desestructuracion
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('should show title sent ', () => {
		render(<GifItem title={title} url={url} />);
		// screen.debug();
		expect(screen.getByText(title)).toBeTruthy(); //simplemente que exista el texto del titulo
	});
});
