import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"

import queryString from 'query-string'
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

	const navigate = useNavigate();
	const location = useLocation();
	const {q=''} = queryString.parse( location.search );
	const heroes = getHeroesByName(q)

	const showSearch = (q?.length===0);
	const showError = ( q&& q.length > 0 ) && heroes?.length ===0;
	
	const {inputSearch, handleChange} = useForm({
		inputSearch:q as string
	})

	const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{

		e.preventDefault()

		navigate(`?q=${inputSearch}`);
	}


	return (

		<>
			<h1>Search</h1>
			<div className="row">
				
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={ handleSubmit } >
						<input 
							type="text"
							placeholder="Search a hero"
							className="form-control"	
							name="inputSearch"
							value={inputSearch}
							autoComplete="off"
							onChange={ handleChange }
						/>
						<button
							className="btn btn-outline-success mt-2"
							onSubmit={ (e)=>handleSubmit }
						>
							Search
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					<div 
						className="alert alert-primary animate__animated animate__fadeIn" 
						style={{display:showSearch ? '' : 'none'}} 
					>Search a hero</div>
					<div 
						className="alert alert-danger animate__animated animate__bounce" 
						style={{display:showError ? '' : 'none'}} 
					>No hero with <b>{q}</b></div>

					{
						heroes?.map( hero =>(
							<HeroCard key={hero.id} hero={hero} />
						))
					}
				</div>
			</div>
		</>
	)
}
