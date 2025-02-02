import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css"
import { useParams } from "react-router";

export const VehicleInfo = () => {


  const [vehicleInfo, setVehicleInfo] = useState({})
  const { id } = useParams()


  const getVehicleInfo = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
      const data = await response.json()
      setVehicleInfo(data.result.properties)
      
    }
    catch (error) {
      alert("Error getting vehicle information from API")
    }
  }


  useEffect(() => {
    getVehicleInfo(id)
    
  }, [])

  return (
    <>
      <div className="card mb-3 mx-auto border border-dark bg-dark text-light" style={{ width: "80vw" }} >
        <div className="row border border-light rounded p-2 m-2 g-1">
          <div className="col d-flex aling-items-center">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="imagen object-fit-cover rounded" alt="vehicle-image" />
          </div>
          <div className="lista col g-0">
            <div className="card-body">
              <div className="title  d-flex justify-content-center">
                <h2 className="lexend display-4 card-title">{vehicleInfo.name}</h2>
              </div>
              <div className="border border-secondary rounded p-3 mt-3">
                <p>Model</p>
                <hr />
                <p className="info-v card-text">{vehicleInfo.model}</p>
                <p>Max atmosphering speed</p>
                <hr />
                <p className=" info-v card-text">{vehicleInfo.max_atmosphering_speed}</p>
                <p>Passengers</p>
                <hr />
                <p className="info-v card-text">{vehicleInfo.passengers}</p>
                <p>Length</p>
                <hr />
                <p className="info-v card-text">{vehicleInfo.length}</p>
                <p>Cargo capacity</p>
                <hr />
                <p className="info-v card-text">{vehicleInfo.cargo_capacity}</p>
                <p>Manufacturer</p>
                <hr />
                <p className="info-v card-text">{vehicleInfo.manufacturer}</p>
                <p>Cost in credits</p>
                <hr />
                <p className="info-v card-text">{vehicleInfo.cost_in_credits}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)


}