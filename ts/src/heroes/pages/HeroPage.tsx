import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHerobyId } from "../helpers/getHerobyId"

export const HeroPage = () => {

	const { id } = useParams();

	const navigate = useNavigate()

	const onNavigateBack = () =>{
		navigate(-1)
	}

	if(typeof id === 'undefined'){
		return <Navigate to='/marvel'/>
	}
	const hero = useMemo( () => getHerobyId(id), [id]);
	
	if( !hero ){
		return <Navigate to='/marvel'/>
	}

	return (
			<div className="row mt-5">
				<div className="col-4">
					<img 
						src={`/assets//heroes/${ id }.jpg`} 
						alt={ hero.superhero } 
						className="img-thumbnail animate__animated animate__fadeInLeft"
						/>
				</div>

				<div className="col-8 animate__animated animate__fadeInDown">
					<h3>{ hero.superhero }</h3>
					<ul className="list-group lis-group-flush">
						<li className="list-group-item"><b>Alter ego: </b>{ hero.alterEgo }</li>
						<li className="list-group-item"><b>Publisher: </b>{ hero.publisher }</li>
						<li className="list-group-item"><b>First Appearance: </b>{ hero.firstAppearance }</li>
					</ul>
					<h5 className="mt-3">Characters</h5>
					<p>{ hero.characters }</p>
					<button
						className="btn btn-outline-dark"
						onClick={onNavigateBack}
					>
						Back
					</button>

					
				</div>
			</div>

	)
}
