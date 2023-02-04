import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard'

type props={
	publisher:string
}

export const HeroList = ({ publisher }:props) => {

	const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher])

	return (
		<div className='row row-cols-1 row-cols-md-3 g-3'>
			{
				heroes.map(hero => (

					<HeroCard 
						key={ hero.id }
						hero={ hero } 
					/>					
				))
			}
		</div>
	)
}
