import { ActionTypes } from '../interfaces/IAuthntication'

const initialState = {}

export const authReducer = (state: typeof initialState, action:ActionTypes) => {

	switch (action.type) {
		case '[AUTH] Login':
			return{
				...state,
				logged:true,
				user:action.payload
			}
		case '[AUTH] logout':
			return{
				logged:false,
			}	
		default:
			return state;
	}
	
}
