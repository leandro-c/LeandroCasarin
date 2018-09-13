
import getAxiosInstance from './axios.js'
import * as types from '../constants'
import data from './../data/data'
export function gethotels() {
    return {
		type:types.HOTEL_ON_GET,
		promise: getAxiosInstance(this).get(data)
    }
}

export function upsertOnhotels(payload){
	console.log('ACTIONS upsertOnhotels',payload)
	return{
		type:types.HOTEL_ON_UPSERT,
		item: payload,
		promise:getAxiosInstance(this).post('/back/updateHoteles', payload)
	}
}

export function setearhotels(value){
	//console.log('ACTIONS setearConductor')
	return{
		type:types.HOTEL_ON_SET_FILTER,
		value
	}
}