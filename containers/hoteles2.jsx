import HotelCard from './../components/hotelCard'
import data from './../data/data'
const Hotels2 = () =>(
    <div>
        {
            data.map(hotel => (
                 <div>
                     <HotelCard hotel={hotel}/>
                 </div>
            ))
        }
        
    </div>

)

export default Hotels2