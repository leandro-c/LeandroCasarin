import {fromJS,List,Map,remove,update} from 'immutable'
import * as types from '../constants'

const initialState = fromJS({
    hotels:[],
    loaded : false,
    Succes: false,
	Error: false,
    Loading : false
})

export default function hotelsstate(state = initialState,{type,...payload}) {
    //console.log('payload',payload)
	switch (type) {
        case types.HOTELS_ON_REMOVE:
            //console.log('upsert hotels payload',payload)
            let hotelsR = state.get('hotels')
                let hotelsRemove = hotelsR.filter(i =>{
                    return (!(i.id== payload.charge.id))
                })
            return state.set('hotels', hotelsRemove)
        case types.HOTELS_ON_UPSERT:
                //console.log('upsert CLIENT payload',payload)
                let hotels = state.get('hotels')
                let index = hotels.findIndex((i =>{
                    //console.log('IIIIII',i)
                    i.id===payload.item.id}))
                console.log('INDEX',index)    
                if(index === (-1)){
                    hotels = hotels.push(payload)
                }else{
                hotels = hotels.update(index,val=> val.set('enabled',payload.item.adress))
                }
            //console.log('hotels upsert client payload',hotels)    
            return state.set('hotels',hotels)
        case types.HOTELS_ON_GET:
            //console.log('GET ON hotels ', payload)
            let cond = payload.res.data.map((obj)=>{obj.id = obj.user_id;return obj})
            return state.set('hotels', cond)
            .set('hotelsFiltrados', cond)
        case types.HOTEL_ON_SET_FILTER:
            if(payload.value){
                let temp = state.get('hotels').filter(i =>{
                    return ((i.name.includes(payload.value)))
                })
                //console.log('EL TEMP', temp)
                return state.set('hotelsFiltrados',temp)
            }                                       
            return state.set('hotelsFiltrados', state.get('hotels'))
                                                        
        default:
            //console.log("4")
            return state
    }
}