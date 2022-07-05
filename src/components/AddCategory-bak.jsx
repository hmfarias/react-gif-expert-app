import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	//Puedo recibir el parámetro estructurado:
	// const onInputChange = (event) => {
	// 	setInputValue(event.target.value);
	// };

	//Puedo recibir el parámetro desestructurado:
	const onInputChange = ({ target }) => {
		// console.log(target.value);
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length < 1) return; //si se da enter en el input sin que haya valores, se retorna sin hacer nada
		setCategories((categories) => [...categories, inputValue]); //agrego lo que se haya escrito a la lista de categorias
		setInputValue(''); //limpio la caja del input
		// console.log(inputValue);
	};

	return (
		// <form onSubmit={(event)=> onSubmit(event)}> puede ser así, o simplificado como abajo
		//onSubmit refresca por defecto toda la pagina. Eso lo evito con event.preventDefault en el onSubmit.
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar Gifs"
				value={inputValue}
				// onChange={(event) => onInputChange(event)} //puedo mandarlo así
				onChange={onInputChange} //o simplificarlo así - siempre se va a mandar el event
			/>
		</form>
	);
};
