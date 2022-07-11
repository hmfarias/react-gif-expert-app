import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../../src/components/AddCategory';

describe('<AddCategory /> component tests', () => {
	const inputValue = 'Nesdimug7';

	test('should change the value of the text box ', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		//primero disparo el evento onchange del input, para eso primero obtengo el input
		const input = screen.getByRole('textbox'); //textbox es el nombre de las etiquetas input

		//ahora disparo el evento
		//se dispara el evento input (o sea como si se estuviera ingresando texto), y lo hace para el elemento input que obtuvimos antes y que se pone en el primer argumento; y en el segundo argumento se pone la información que se va a enviar, que en este caso es el target y dentro del target el value deseado
		fireEvent.input(input, { target: { value: inputValue } });

		expect(input.value).toBe(inputValue);
		// screen.debug();
	});

	test('should call onNewcategory function if the INPUT has a value and the text box must be empty after the submit ', () => {
		// AddCategory recibe una funcion como argumento. Para poder probar esa función uso lo siguiente (jest function)
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);
		const input = screen.getByRole('textbox'); //textbox es el nombre de las etiquetas input
		const form = screen.getByRole('form'); //para el formulario

		//ahora disparo los eventos
		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		//como el onSubmit entre otras cosas lo que hace al final es dejar en blanco la caja de texto, puedo verificar eso
		expect(input.value).toBe('');
		// screen.debug();

		//yo se que dentro de AddCategory, en un momento se llama a la funcion onNewCategory, y para verificar eso puedo usar lo siguiente:
		expect(onNewCategory).toHaveBeenCalled(); //solo analiza que se llame y nada mas
		expect(onNewCategory).toHaveBeenCalledTimes(1); //analiza cuantas veces se llamó la funcion. En este caso una sola vez
		expect(onNewCategory).toHaveBeenCalledWith(inputValue); //con eso evaluo que la funcion sea llamada con el parámetro correcto que es el valor de la caja de texto
	});

	test('should not call onNewCategory if the input is empty', () => {
		// AddCategory recibe una funcion como argumento. Para poder probar esa función uso lo siguiente (jest function)
		const onNewCategory = jest.fn();
		render(<AddCategory onNewCategory={onNewCategory} />);
		const form = screen.getByRole('form'); //para el formulario

		//ahora disparo los eventos
		fireEvent.submit(form);

		//yo se que dentro de AddCategory, en un momento se llama a la funcion onNewCategory, y para verificar eso puedo usar lo siguiente:
		expect(onNewCategory).toHaveBeenCalledTimes(0); //analiza cuantas veces se llamó la funcion. En este caso NINGUNA vez porque el usuario dio enter sin texto en la caja

		//otra forma de analizar lo mismo pero usando la negacion .not.
		expect(onNewCategory).not.toBeCalled();
	});
});
