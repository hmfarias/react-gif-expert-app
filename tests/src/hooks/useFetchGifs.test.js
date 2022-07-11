//Siempre vamos a evaluar el comportamiento del Hooks basado en su retorno
// Para eso se utiliza renderHook, porque no se pueden utilizar los hooks directamente

import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

describe('useFetchGifs custom hook tests', () => {
	const category = 'Star Wars';

	test('should Return the initial state - empty array and Isloading in True', () => {
		//renderhook devuelve varias cosas, entre ellas RESULT
		const { result } = renderHook(() => useFetchGifs(category));
		// console.log(result);
		const { images, isLoading } = result.current;
		expect(images.length).toBe(0);
		expect(isLoading).toBe(true);
		expect(isLoading).toBeTruthy(); //otra forma de ver si es igual a true
	});

	test('should return an array of images and isloading = False, once the initial state passed ', async () => {
		//renderhook devuelve varias cosas, entre ellas RESULT
		const { result } = renderHook(() => useFetchGifs(category));
		//hasta aquí tengo los valores inciales del hook, ahora tengo que ver que pasa cuando el hook internamente se ejecute y cambie esos valores inciales
		//para eso uso waitFor que devuelve una promesa y por eso en la funcion del  test tengo que usar async
		await waitFor(
			//espera a que el resultado sea un array de imagenes con al menos un elemento - esto ejecuta el hook internamente
			() => expect(result.current.images.length).toBeGreaterThan(0)
		);

		//y ahora puedo evaluar los resultados y desestructurarlos
		// console.log(result.current.images);
		const { images, isLoading } = result.current;
		expect(images.length).toBeGreaterThan(0);
		// expect(isLoading).toBe(false);
		expect(isLoading).toBeFalsy(); //otra forma de ver si es igual a false
	});
});
0;
