// import React from 'react' //esto no hace falta despues de la version 17 de react

import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

//API KEY: rFEKemDrg086Y97sWuCYRr9TPhQruV1L

export const GifExpertApp = () => {
	//hook para mantener el estado
	const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']); //con esto tengo el espaci para almacenar las categorías
	// console.log(categories);

	const onAddCategory = () => {
		//VARIAS FORMAS DE HACERLO
		// setCategories((categ) => categ.concat('Valorant'));
		// setCategories(categories.concat('Valorant'));
		// setCategories((categ) => [...categ, 'Valorant']);
		setCategories([...categories, 'Valorant']);
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory setCategories={setCategories} />
			{/* Listado de Gif */}
			<button onClick={onAddCategory}>Agregar</button>
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>; //debo mandar a una key si no sale un warning en la consola
				})}
			</ol>
			{/* Gif items */}
		</>
	);
};
