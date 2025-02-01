import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPlanets = ({urlPlanet, planetId}) => {

const [dataPlanet, setDataPlanet] = useState({})
const {actions, store} = useContext(Context)
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

const getPlanetInfo = async() => {
try { const response = await fetch(urlPlanet)
    const data  = await response.json()
    const result = data.result
    setDataPlanet(result.properties)
    
} catch (error) {
    console.log(error)
}
} 




useEffect(()=> {
getPlanetInfo()
}, [])

 return (<>
        <div className="carta card col-3  my-4 p-2 bg-dark border border-danger vivo">
            <div className="position-relative">
            <img src={ parseInt(planetId) != 1 ? `https://starwars-visualguide.com/assets/img/planets/${planetId}.jpg`: "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg" } className="card-img-top" alt="..." />
                <Link to={`/planet/${planetId}`}>
                    <div className="text-danger hide position-absolute bottom-0 end-0 rounded-pill border border-danger m-2 px-2 bg-black" >
                        <p className="fs-5">+Info</p>
                    </div>
                </Link>
            </div>
            <div className="carta-texto ms-2 text-white  mt-2">
                <div className="d-flex justify-content-between border-bottom border-light mb-2">
                    <div className="align-bottom">
                        <p className="lexend fs-3 text-white card-title mb-0">{dataPlanet.name}</p>
                    </div>
                    
                    <button type="button" className="btn" onClick={() =>
                     {
                         handleLike(dataPlanet.name)
                          }} ><span><i className={`${store.favorites.includes(dataPlanet.name)? "fa-solid like fs-5" : "fa-regular no-like"} fa-heart `}></i></span></button>
                </div>
                <div className="into-light">
                        <p><b>Climate</b>: {dataPlanet.climate}</p>
                        <p><b>Population</b>: {dataPlanet.population}</p>
                        <p><b>Gravity</b>: {dataPlanet.gravity}</p> 
                    </div>

            </div>

        </div>
    </>)


}