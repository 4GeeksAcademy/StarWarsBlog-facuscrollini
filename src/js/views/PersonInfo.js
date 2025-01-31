import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/index.css"

export const PersonInfo = () => {

  const { id } = useParams()
  const [personInfo, setPersonInfo] = useState({})

  const getPersonInfo = async (id) => {
    try {
      const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
      const data = await response.json()
      setPersonInfo(data.result.properties)
    }
    catch (error) {
      alert("Error getting person information from API")
    }
  }

  useEffect(() => {
    getPersonInfo(id)

  }, [])

  return (
    <>
      <div className="card mb-3 mx-auto border border-dark bg-dark text-light" style={{ width: "80vw" }} >
        <div className="row border border-light rounded p-2 m-2 g-1">
          <div className="col-4 d-flex aling-items-center">
              <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="imagen object-fit-cover rounded" alt="profile-image" />
          </div>
          <div className="lista col-md-8 g-0">
            <div className="card-body">
              <div className="title  d-flex justify-content-center">
                <h2 className="lexend display-4 card-title">{personInfo.name}</h2>
              </div>
              <div className="border border-secondary rounded my-auto p-3 ps-5 mt-3">
                <p>Birth year</p>
                <hr />
                <p className="info card-text">{personInfo.birth_year}</p>
                <p>Gender</p>
                <hr />
                <p className=" info card-text">{personInfo.gender}</p>
                <p>Height</p>
                <hr />
                <p className="info card-text">{personInfo.height}</p>
                <p>Mass</p>
                <hr />
                <p className="info card-text">{personInfo.mass}</p>
                <p>Eye color</p>
                <hr />
                <p className="info card-text">{personInfo.eye_color}</p>
                <p>Hair color</p>
                <hr />
                <p className="info card-text">{personInfo.hair_color}</p>
                <p>Skin color</p>
                <hr />
                <p className="info card-text">{personInfo.skin_color}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}
