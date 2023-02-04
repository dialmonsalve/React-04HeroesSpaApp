import { heroes } from "../data"

type Parametro = string | (string | null)[] | null 

export const getHeroesByName =( name:Parametro) => {

	if( typeof name === 'string' ){
		name = name.toLowerCase().trim()

		if (name.length === 0) return []
	}
	return  heroes.filter ( 
		hero => hero.superhero.toLowerCase().includes( name as string ) )
}
