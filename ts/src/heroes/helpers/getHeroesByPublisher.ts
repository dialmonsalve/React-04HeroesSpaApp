import { heroes } from "../data/heroes"
import { IHero } from "../data/interface";


export const getHeroesByPublisher = ( publisher:string ):IHero[] => {

	const validPublisher = ['DC Comics', 'Marvel Comics'];

	if( !validPublisher.includes(publisher)){
		throw new Error(`${publisher} is not valid publisher`);
		
	}

	return heroes.filter( heroe => heroe.publisher === publisher)

}
