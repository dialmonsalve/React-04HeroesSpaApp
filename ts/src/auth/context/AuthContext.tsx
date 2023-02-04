import { createContext } from "react";
import { User } from "../interfaces/IAuthntication";

type AuthContextTtype = {
	authState:{
		user?:User,
		logged?:boolean
	},
	login(name:string):void,
	logout():void
}

const props:AuthContextTtype ={
	authState: {
		user:{
			id:"",
			name:""
		},
		logged:false
	},
	login: function (): void {
		throw new Error("Function not implemented.");
	},
	logout: function (): void {
		throw new Error("Function not implemented.");
	}
}

export const AuthContext = createContext<AuthContextTtype >(props);