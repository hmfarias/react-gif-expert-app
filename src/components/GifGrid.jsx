// import { useEffect, useState } from 'react'; //ya no lo uso porque paso a useFetchGifs
// import { getGifs } from '../helpers/getGifs';//ya no lo uso porque paso a useFetchGifs
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { LoadingMessage } from './LoadingMessage';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	//todo esto de abajo que hace la carga de las imagenes
	//lo voy a llevar a un custom hook useFetchGifs**********
	// //Para mantener las imagenes uso el useState
	// const [images, setImages] = useState([]); //inicializado con array vacio

	// //ahora pongo las imagenes que trajo getGifs en el array images
	// //getImages devuelve una promesa y por ello uso async await
	// //no puedo usar async directamente en el useEffect y por eso creo la funcion getImages por fuera del useEffect
	// const getImages = async () => {
	// 	const newImages = await getGifs(category);
	// 	setImages(newImages);
	// };

	// //useEffect es un hook de react que permite definir cuando queramos que se ejecute un efecto secundario
	// //lleva un call back donde se define el efecto que queremos disparar y como segundo argumento un arreglo donde se pone una lista de dependencias de react que si se deja vacío le indica que sólo se ejecuta la primera vez que se construye el componente
	// useEffect(() => {
	// 	getImages();
	// }, []);
	//todo esto lo de arriba lo voy a remplazar con un custom hook **********

	return (
		<>
			<h3>{category}</h3>
			{
				//puedo hacerlo usando operador ternario
				// isLoading ? <h2>Loading ...</h2> : null

				//o puedo hacerlo usando un if corto con una sola condicion usando el and logico &&
				// isLoading && <h2>Loading ...</h2>
				<LoadingMessage state={isLoading} />
			}
			<div className="card-grid">
				{images.map((img) => (
					<GifItem
						key={img.id}
						{...img} //de este modo envio al componente GifItem todas las propiedades que hay en img y puedo desestructurar la que necesite ya en el componente
					/>
				))}
			</div>
		</>
	);
};
