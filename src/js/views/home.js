import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/Cards";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/CardPeople";
import { CardVehicles } from "../component/CardVehicles";
import { CardPlanets } from "../component/CardPlanets";

export const Home = () => {

	const [people, setPeople] = useState([])
	const [planets, setPlanets] = useState([])
	const [vehicles, setVehicles] = useState([])


	const getVehicle = async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/vehicles")
			console.log(response)
			const data = await response.json()
			setVehicles(data.results)


		}
		catch (error) {
			console.log(error)
		}
	}

	const getPeople = async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/people")
			console.log(response)
			const data = await response.json()
			setPeople(data.results)


		}
		catch (error) {
			console.log(error)
		}
	}

	const getPlanet = async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/planets")
			const data = await response.json()
			setPlanets(data.results)

		}
		catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		getPeople()
		getPlanet()
		getVehicle()
	}, [])

	return (
		<>
		<div class="bona-nova ps-5 fs-3  pb-2 mb-4 text-danger border-bottom border-danger">
  CHARACTERS
</div>
		<div className="container my-4">
			<div className="fila row gap-5 col-12 pb-3" >
				{people.map((personas, index) => {
					return(
					<CardPeople urlPerson={personas.url} key={index} personId={personas.uid}/>
				)	})}

			</div>
			</div>
			<div class="bona-nova ps-5 fs-3  pb-2 mb-4 text-danger border-bottom border-danger">
 VEHICLES
</div>
			<div className="container my-4">
			<div className="fila row gap-5 col-12 pb-3" >
				{vehicles.map((vehiculos, index) => {
					return (
						<CardVehicles urlVehicle={vehiculos.url} key={index} vehicleId={vehiculos.uid}/>
						)})}

			</div>
			</div>
			<div class="bona-nova ps-5 fs-3  pb-2 mb-4 text-danger border-bottom border-danger">
  PLANETS
</div>
			<div className="container my-4">
			<div className="fila row gap-5 col-12 pb-3" >
				{planets.map((planetas, index) => {
					return (
						<CardPlanets urlPlanet={planetas.url} key={index} planetId={planetas.uid}/>
						 )})}

			</div>
			</div>

			</>


	);
}
