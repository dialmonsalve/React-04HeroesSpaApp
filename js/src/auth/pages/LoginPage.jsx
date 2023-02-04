import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context"

export const LoginPage = () => {

	const {login} = useContext(AuthContext);

	const navigate = useNavigate();

	const onLogin = () =>{

		const lastPath = localStorage.getItem('lastPath') || '/';

		login( 'Diego Monsalve' );

		navigate(lastPath,{
			replace:true,
		})
	}

	return (

		<>
			<h1>LOGIN</h1>
			<div className="container" >
				<button 
					className="btn btn-info text-white"
					onClick={onLogin}>
					Login
				</button>
			</div>
			
		</>
	)
}
