import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";

export default function Facts() {
	const [fact, setFact] = useState("");
	const factAPI = async () => {
		let arrayFact = [];
		try {
			const dataF = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
			arrayFact = dataF.data;
		} catch (err) {
			console.log(err);
		}

		try {
			setFact(arrayFact.text);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		factAPI();
	}, [])
	return (
		<>
			<div className="card">
				<div className="card-heading">Random Facts</div>
				<div className="card-container">
					<Card sx={{ maxWidth: 285, minHeight: 250 }}>
						<CardContent><div className='para'>{fact}
						</div></CardContent></Card></div>
				<div className="button-next" onClick = {factAPI}>
					<Button variant="contained" color="success">
						Next
					</Button>
				</div>
			</div>
		</>
	)
}
