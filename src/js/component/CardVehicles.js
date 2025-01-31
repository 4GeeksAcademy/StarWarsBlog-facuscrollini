import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardVehicles = ({urlVehicle, vehicleId}) => {

const [dataVehicle, setDataVehicle] = useState({})
const {actions} = useContext(Context)
const [liked, setLiked] = useState(false)
    

const handleLike = (itemName) => {
    if(liked) {
        actions.deleteFavorite(itemName)
        setLiked(false)
    } else if(!liked){
        actions.addFavorite(itemName)
        setLiked(true)
    }

}



const getVehicleInfo= async() => {
try {
     const response = await fetch(urlVehicle)
    const data  = await response.json()
    const result = data.result
    setDataVehicle(result.properties)
    
} catch (error) {
    console.log(error)
}
} 




useEffect(()=> {
getVehicleInfo()
}, [])

return (<>
        <div className="carta card col-3  my-4 p-2 bg-dark border border-danger vivo">
            <div className="position-relative">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`} className="card-img-top" alt="..." />
                <Link to={`/vehicle/${vehicleId}`}>
                    <div className="text-danger hide position-absolute bottom-0 end-0 rounded-pill border border-danger m-2 px-2 bg-black" >
                        <p className="fs-5">+Info</p>
                    </div>
                </Link>
            </div>
            <div className=" ms-2 text-white  mt-2">
                <div className="d-flex justify-content-between border-bottom border-light mb-2">
                    <div className="align-bottom">
                        <p className="lexend fs-3 text-white card-title mb-0">{dataVehicle.name}</p>
                    </div>
                    
                    <button type="button" className="btn" onClick={() =>
                     {
                         handleLike(dataVehicle.name)
                          }} ><span><i className={`${liked ? "fa-solid like fs-5" : "fa-regular no-like"} fa-heart `}></i></span></button>
                </div>
                <div className="into-light ">
                        <p> <b>Max speed</b>:  {dataVehicle.max_atmosphering_speed}</p>
                        <p><b>Passenger</b>:  {dataVehicle.passengers}</p>
                        <p><b>Cost</b>:  {dataVehicle.cost_in_credits}</p> 
                    </div>

            </div>

        </div>
    </>)

}