import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import queryString from 'query-string'
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {

	const navigate = useNavigate();
	const location = useLocation();

	const { q = ''} = queryString.parse( location.search);
	const heroes = getHeroesByName(q);

	const showSearch = (q.length === 0);
	const showError = (q.length > 0) && heroes.length === 0;

	const {searchText, onInputChange} = useForm({
		searchText: q
	});

	const onSearchSubmit = e =>{
		e.preventDefault();

		//if( searchText.trim().length <= 1) return;
		navigate(`?q=${ searchText }`)
	}

	return (

		<>
			<h1>Search</h1>
			<hr />
			<div className="row">	
				<div className="col-5">
					<h4>Searching</h4>
					<hr />
					<form onSubmit={ onSearchSubmit }>
						<input 
							type="text"
							placeholder="Search a hero"
							className="form-control"
							name="searchText"
							autoComplete="off"
							value={searchText}
							onChange={ onInputChange }
						/>
						<input 
							type="submit"
							value="Search"
							className="btn btn-outline-secondary mt-1" />
					</form>
				</div>

				<div className="col-7">
					<h4>Resultados</h4>
					<hr />
					
					<div 
						className="alert alert-primary animate__animated anima" 
						style={{display: showSearch ? '':'none'}}>
						Busca un heroe
					</div>				

					<div className="alert alert-danger animate__animated anima"
						style={{display: showError ? '':'none'}}>
						No hay resultados para <b>{ q }</b>
					</div>
					{
						heroes.map( hero => (
							<HeroCard key={hero.id} {...hero}/>
						))
					}

				</div>
			</div>
		</>

	)
}
