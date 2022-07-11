//snapshot
//escribir en el input
//postear el formulario y ver que pasa
//que pasa si se envía la misma categoria
//que pasa si se manda una categoria diferente qué sucede en el html
import { GifExpertApp } from " '../../../src/GifExpertApp";
import { fireEvent, render, screen } from '@testing-library/react';

describe('<GifExpertApp /> component tests', () => {
	const newCategory = 'Star Wars';

	test('should Add new categories', () => {
		// GifExpertApp usa la funcion onAddCategory. Para poder probar esa función uso lo siguiente (jest function)
		const { container } = render(<GifExpertApp />);
		const input = screen.getByRole('textbox'); //textbox es el nombre de las etiquetas input
		const form = screen.getByRole('form'); //para el formulario

		//ahora disparo los eventos para agregar 3 categorias nuevas
		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);

		fireEvent.input(input, { target: { value: newCategory + '2' } });
		fireEvent.submit(form);

		fireEvent.input(input, { target: { value: newCategory + '3' } });
		fireEvent.submit(form);

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
	});

	test('Should not add a repeated category', () => {
		// GifExpertApp usa la funcion onAddCategory. Para poder probar esa función uso lo siguiente (jest function)
		const { container } = render(<GifExpertApp />);
		const input = screen.getByRole('textbox'); //textbox es el nombre de las etiquetas input
		const form = screen.getByRole('form'); //para el formulario
		//disparo los eventos para agregar una categoria
		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);

		//Intento agregar la misma categoria
		fireEvent.input(input, { target: { value: newCategory } });
		fireEvent.submit(form);

		//espero que no agregue la misma categoria
		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
	});
});
