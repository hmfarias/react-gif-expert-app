//Pongo la primera letra de cada palabra recibida en mayúscula ********

export const capitalizeString = (string) =>
	string
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
