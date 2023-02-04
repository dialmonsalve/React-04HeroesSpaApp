
export interface User{
	id:string,
	name:string,
}
export type ActionTypes = 

	| {type:'[AUTH] Login'; payload:User}
	| {type:'[AUTH] logout'}
	


