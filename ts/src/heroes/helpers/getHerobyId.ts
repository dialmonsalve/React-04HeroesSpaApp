import { heroes } from "../data"

export const getHerobyId = (id:string) => {

		return heroes.find( hero => hero.id === id )
	

}
