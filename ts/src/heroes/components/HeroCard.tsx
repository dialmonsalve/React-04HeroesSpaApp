import { Link } from "react-router-dom";
import { IHero } from "../data/interface";

type propsHero ={
	alterEgo:string,
	character:string
}
const CharactersByHero = ({alterEgo, character}:propsHero) =>{
	return (alterEgo === character)
		? <></>
		: <p>{character}</p>
}

type props = {
	hero:IHero
}
export const HeroCard = ({hero:{ id, alterEgo, characters, firstAppearance, publisher,  superhero }}:props) => {

	const heroImageUrL = `/assets/heroes/${id}.jpg`

	return (
		<div className="col animate__animated animate__fadeIn">
			<div className="card">
				<div className="row no-gutters">
					<div className="col-4">
						<img className="card-img" src={heroImageUrL} alt={superhero} />
					</div>
					<div className="col-8">
						<div className="card-body">
							<h5>{superhero}</h5>
							<p>{alterEgo}</p>

							<CharactersByHero alterEgo={alterEgo} character={characters}/>
							<p className="card-text">
								<small className="text-muted">{firstAppearance}</small>								
								</p>

								<Link to={`/hero/${id}`}>
									More...
								</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
