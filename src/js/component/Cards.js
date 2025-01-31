import React from "react";


export const Card = ({fila}) => {
    return( <>
   <div className="container my-4">
			<div className="fila row gap-5 col-12" >
				{fila.map((personas, index) => {
					return (
						<div key={index} className="card col-4 my-4" style={{width: "18rem"}}>
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{personas.name}</h5>
								<p className="card-text"></p>
								<a href="#" className="btn btn-primary">Go somewhere</a>
							</div>
				
						</div> )})}

			</div>
			</div>
    </>)
}