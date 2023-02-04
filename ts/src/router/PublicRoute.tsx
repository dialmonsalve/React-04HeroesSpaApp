import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

type props={
	children:JSX.Element
}

export const PublicRoute = ({children}:props) => {

	const {authState:{ logged }} = useContext(AuthContext)

	return (
		!logged
	)
	?children
	: <Navigate to="/marvel" />
}
