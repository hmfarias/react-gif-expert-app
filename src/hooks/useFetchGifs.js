import { useEffect, useState } from 'react';
import { getGifs } from '../helpers';

export const useFetchGifs = (category) => {
	//todo antes estaba en GifGrid **********

	//Para mantener las imagenes uso el useState
	const [images, setImages] = useState([]); //inicializado con array vacio
	const [isLoading, setIsLoading] = useState(true); //para manejar el isloading que cuando se carga por primera vez está en true y cuando termine se pone en false

	//ahora pongo las imagenes que trajo getGifs en el array images
	//getImages devuelve una promesa y por ello uso async await
	//no puedo usar async directamente en el useEffect y por eso creo la funcion getImages por fuera del useEffect
	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
		setIsLoading(false); //ya termino de cargar y lo pongo en false
	};

	//useEffect es un hook de react que permite definir cuando queramos que se ejecute un efecto secundario
	//lleva un call back donde se define el efecto que queremos disparar y como segundo argumento un arreglo donde se pone una lista de dependencias de react que si se deja vacío le indica que sólo se ejecuta la primera vez que se construye el componente
	useEffect(() => {
		getImages();
	}, []);
	// todo antes estaba en GifGrid **********

	return {
		//se puede poner asi:
		// images: images,
		// isLoading: isLoading,

		//o mas modernamente cuando el nombre del elemento es igual al de la variable:
		images,
		isLoading,
	};
};
