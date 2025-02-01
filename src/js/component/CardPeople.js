import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPeople = ({ urlPerson, personId }) => {

    const [dataPerson, setDataPerson] = useState({})
    const { actions,store } = useContext(Context)
    const [liked, setLiked] = useState(false)
    

    const handleLike = (itemName) => {
        if(liked) {
            actions.deleteFavorite(itemName)
        } else if(!liked){
            actions.addFavorite(itemName)
        }

    }


    const getPersonInfo = async () => {
        try {
            const response = await fetch(urlPerson)
            const data = await response.json()
            const result = data.result
            setDataPerson(result.properties)

        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {
        getPersonInfo()
    }, [])



    return (<>
        <div className="carta card col-3  my-4 p-2 bg-dark border border-danger vivo">
            <div className="position-relative">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`} className="card-img-top" alt="..." />
                <Link to={`/person/${personId}`}>
                    <div className="text-danger hide position-absolute bottom-0 end-0 rounded-pill border border-danger m-2 px-2 bg-black" >
                        <p className="fs-5">+Info</p>
                    </div>
                </Link>
            </div>
            <div className="carta-texto ms-2 text-white  mt-2">
                <div className="d-flex justify-content-between border-bottom border-light mb-2">
                    <div className="align-bottom">
                        <p className="lexend fs-3 text-white card-title mb-0">{dataPerson.name}</p>
                    </div>
                    
                    <button type="button" className="btn" onClick={() =>
                     {
                         handleLike(dataPerson.name)
                          }} ><span><i className={`${store.favorites.includes(dataPerson.name) ? "fa-solid like fs-5" : "fa-regular no-like"} fa-heart `}></i></span></button>
                </div>
                <div className="into-light">
                        <p> <b>Height</b>: {dataPerson.height}</p>
                        <p><b>Mass</b>: {dataPerson.mass}</p>
                        <p><b>Skin color</b>: {dataPerson.skin_color}</p> 
                    </div>

            </div>

        </div>
    </>)


}