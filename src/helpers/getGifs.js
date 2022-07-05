//API KEY: rFEKemDrg086Y97sWuCYRr9TPhQruV1L
export const getGifs = async (category) => {
	//aca hago la peticion a la API de gifs y obtengo un array de gifs
	const apiKey = 'rFEKemDrg086Y97sWuCYRr9TPhQruV1L';
	const endPoint = 'https://api.giphy.com/v1/gifs/search';
	const limit = 15;
	const url = `${endPoint}?api_key=${apiKey}&q=${category}&limit=${limit}`;

	const resp = await fetch(url);
	const { data } = await resp.json(); //esto es un arreglo

	//se puede escribir asi:
	// const gifs = data.map((img) => {
	// 	return {
	// 		id: img.id,
	// 		title: img.tite,
	// 		url: img.images.downsized_medium.url,
	// 	};
	// });
	//se puede escribir así tambien pero mas resumido que arriba
	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
	// console.log(gifs);
	return gifs;
};
