import { useReducer } from 'react';
import { ActionTypes, User } from '../interfaces/IAuthntication';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

type props={
	children: JSX.Element | JSX.Element[]
}

const init = () =>{

	const value = localStorage.getItem('user')

	if (typeof value === 'string') {
		const user = JSON.parse(value)
		return{
			logged: !!user,
			user
		}
	}else{
		return {logged:false}
	}
}

export const AuthProvider = ({children}:props) => {

	const [authState, dispatch] = useReducer(authReducer, {}, init);

	const login = ( name:string ) => {

		const user={id:'123',name}
		const action:ActionTypes = {type:'[AUTH] Login',payload:user}

		localStorage.setItem('user', JSON.stringify( user))
		dispatch(action)
	}

	const logout = () =>{

		localStorage.removeItem('user');
		const action:ActionTypes={
			type:'[AUTH] logout'
		}
		dispatch(action)

	}

	return(
		<AuthContext.Provider value={{
			authState, login, logout
		}}>
			{children}
		</AuthContext.Provider>
	)

}
