import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {


	const { store, actions } = useContext(Context)

	const list = store.favorites



	return (
		<nav className="navbar navbar-light bg-black border-bottom border-warning bg-opacity-75 px-5 mb-3">
			<Link to="/">
				<div >
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" style={{ height: "7vw" }} />
				</div>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn text-warning  border border-warning rounded dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-lg-end text-white" style={list.length != 0 ? {backgroundColor: "#ff9a00"} : {backgroundColor: "#ffc107"}}>
						{list.length != 0 ? list.map((item)=>{
							return(
								 <li><p className="list-group-item favorite px-2 d-flex justify-content-between">{item}<span onClick={() =>actions.deleteFavorite(item)}><i className="fa-solid fa-trash"></i></span> </p></li>)
						}) : <li> <p  className="px-2" ><i className="fa-solid fa-exclamation"></i> Add favorites</p></li>
						
}
							

					</ul>
				</div>

			</div>
		</nav>
	);
};
