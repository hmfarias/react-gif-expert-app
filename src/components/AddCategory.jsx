import { useState } from 'react';
import { capitalizeString } from '../helpers';

export const AddCategory = ({ onNewCategory }) => {
	//para mantener el valor ingresado en el input uso el hoock useState
	const [inputValue, setInputValue] = useState(''); //2

	//Puedo recibir el parámetro estructurado:
	// const onInputChange = (event) => {
	// 	setInputValue(event.target.value);
	// };
	//Puedo recibir el parámetro desestructurado:
	const onInputChange = ({ target }) => {
		//3
		// console.log(target.value);
		setInputValue(target.value);
	};

	const onSubmit = (event) => {
		//5
		event.preventDefault(); //para que no haga el full Refresh de la pagina
		const newInputValue = inputValue.trim(); //le saco los espacios al principio o al final
		if (newInputValue.length < 1) return; //si se da enter en el input sin que haya valores, se retorna sin hacer nada

		//pongo la primera letra de cada palabra en mayuscula
		const newImputValueCapital = capitalizeString(newInputValue);

		onNewCategory(newImputValueCapital); //mando la nueva categoria al padre para que la inserte

		setInputValue(''); //limpio la caja del
		// console.log(inputValue);
	};

	return (
		//creo un form para que cuando se le dé enter se dispare el submit de ese form y ahi es donde voy a agregar la categoria
		// <form onSubmit={(event)=> onSubmit(event)}> puede ser así, o simplificado como abajo
		//onSubmit refresca por defecto toda la pagina. Eso lo evito con event.preventDefault en el onSubmit.

		//4
		<form onSubmit={onSubmit}>
			<input //1
				type="text"
				placeholder="Buscar Gifs"
				value={inputValue}
				// onChange={(event) => onInputChange(event)} //puedo mandarlo así
				//para poder cambiar el input, react pide que se agregue el metodo onChange si no no se puede cambiar el valor por mas que escriba
				onChange={onInputChange} //o simplificarlo así - siempre se va a mandar el event
			/>
		</form>
	);
};
