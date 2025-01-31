import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/index.css"

export const PlanetInfo = () => {

    const [planetInfo, setPlanetInfo] = useState({})
    const { id } = useParams()


    const getPlanetInfo = async (id) => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
            const data = await response.json()
            setPlanetInfo(data.result.properties)
        }
        catch (error) {
            alert("Error getting vehicle information from API")
        }
    }

    useEffect(() => {
        getPlanetInfo(id)
    }, [])

    return (
        <>
            <div className="card mb-3 mx-auto border border-dark bg-dark text-light" style={{ width: "80vw" }} >
                <div className="row border border-light p-2 m-2 g-1">
                    <div className="col d-flex aling-items-center">
                    <img src={parseInt(id) != 1 ? `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` : "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"} className="imagen object-fit-cover rounded" alt="planet-image" />
                    </div>
                    <div className="lista col g-0">
                        <div className="card-body">
                            <div className="title  d-flex justify-content-center">
                                <h2 className="lexend display-4 card-title">{planetInfo.name}</h2>
                            </div>
                            <div className="into-light border border-secondary rounded p-3 mt-3">
                                <p>Population</p>
                                <hr />
                                <p className="info-p pcard-text">{planetInfo.population}</p>
                                <p>Climatel</p>                          <hr />
                                <p className="info-p card-text">{planetInfo.climate}</p>
                                <p>Diameter</p>
                                <hr />
                                <p className=" info-p card-text">{planetInfo.diameter}</p>
                                <p>Gravity</p>
                                <hr />
                                <p className="info-p card-text">{planetInfo.gravity}</p>
                                <p>Orbital period</p>
                                <hr />
                                <p className="info-p card-text">{planetInfo.orbital_period}</p>
                                <p>Rotation period</p>
                                <hr />
                                <p className="info-p card-text">{planetInfo.rotation_period}</p>
                                <p>Terrain</p>
                                <hr />
                                <p className="info-p card-text">{planetInfo.terrain}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)

}