// import React from 'react' //esto no hace falta despues de la version 17 de react

import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; //puedo importar directo de components porque hice el archivo de barril index,js

export const GifExpertApp = () => {
	//Cuando sea necesario almacenar informacion y esa informacion tiene que cambiar el HTML, debo usar un hook, hay varios
	//por ahora vamos a usar useState como hook para mantener esa info
	const [categories, setCategories] = useState([]); //con esto tengo el espacio para almacenar las categorías como un arreglo
	// console.log(categories);

	const onAddCategory = (newCategory) => {
		// console.log(newCategory);
		//VARIAS FORMAS DE HACERLO
		// setCategories((categ) => categ.concat('Valorant'));
		// setCategories(categories.concat('Valorant'));
		// setCategories((categ) => [...categ, 'Valorant']);

		//Antes de insertarlo verifico que ya no esté en el arreglo
		if (categories.includes(newCategory)) return; //si el array de categorias ya incluye a la que se recibe desde el componente AddCategory retorna sin hacer nada

		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			{/* titulo */}
			<h1>GifExpertApp</h1>

			{/* Input ***********************************************/}
			<AddCategory
				// setCategories={setCategories} // de esta manera estoy enviando la funcion para insertar la categoria, para que la use el higo AddCategory. Esto se puede mejorar
				//La idea es que el hijo NO INSERTE sino que me devuelva el valor a insertar, para que lo inserte el padre. Veamos abajo como se hace usando una prop:
				onNewCategory={(value) => onAddCategory(value)}
			/>
			{/* fin Input ****************************************** */}

			{/* <button onClick={onAddCategory}>Agregar</button> */}

			{/* Listado de Gif **************************************/}
			{/* Gif items */}
			{categories.map((category) => (
				// <div key={category}>
				// 	<h2>{category}</h2>
				// 	<li>{category}</li>
				// </div> //debo mandar a una key si no sale un warning en la consola
				//En lugar de mandar todo lo anterior, ahora uso el nuevo componente GifGrid que solo se va a encargar de mostrar todo lo relacionado a esa unica categoria ue se está iterando
				<GifGrid category={category} key={category} /> //la key la mando para que quede identificada univocamente la categoria y no de el warnin react
			))}

			{/* fin Listado de Gif **************************************/}
		</>
	);
};
