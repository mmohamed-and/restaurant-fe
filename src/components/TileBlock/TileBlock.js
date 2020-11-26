import React, { useState, useEffect } from "react";
import "./style.css";

const TileBlock = () => {
	const [data, setData] = useState([]);
	const url = "/api/restaurant";
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			const result = await fetch(url, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			}).catch((err) => console.log("Failed to fetch: ", err));
			const data = await result.json();
			setData(data);
			setIsLoading(false);
		};

		fetchData();
	}, [url]);

	return isLoading ? (
		<p>Loading...</p>
	) : (
			<div className="tile">
				{data.length > 0 && data.map((restaurant) => {
					return (
						<div key={restaurant.id} className="tile-block">
							<div className="background-block"></div>
							<div className="tile-info">
								<h3 className="tile-header">
									{restaurant.name}
								</h3>
								<h6 className="tile-cuisine">
									{restaurant.cuisine}
								</h6>
								<h6 className="tile-city">
									{restaurant.city}
								</h6>
								<p className="tile-desc">
									{restaurant.description}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		);
};

export default TileBlock;
