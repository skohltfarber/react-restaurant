import React from "react";

export default function BodyProduct(props) {


	return (
		<>
			<div className="row">
				<div className="col-12">&nbsp;</div>

			</div>
			<div key={props.key} className="row row-cols-sm-1 row-cols-md-2">
				<div className="col-sm-12 col-md-4 col-lg-3">
					<h3>{props.name}</h3>
					<img src={props.image} alt={props.name} />
				</div>
				<div className="col-sm-12 col-md-8 col-lg-9">
					<p> {props.description}</p>
					<a href="/" className="btn btn-primary">Product Paage</a>
				</div>
			</div>
		</>
	)
}