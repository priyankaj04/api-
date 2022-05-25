import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";

export default function Jokes() {
	const [jokes, setJoke] = useState("");
	const [setup, setUp] = useState("");

	const jokeAPI = async () => {
		let arrayJoke = [];

		const options = {
			method: 'GET',
			url: 'https://dad-jokes.p.rapidapi.com/random/joke',
			headers: {
				'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
				'X-RapidAPI-Key': '0a83db6b8fmsh7ba7ea08a0d83e4p1fa8bajsn9f10a557064a'
			}
		};

		try {
			const dataJ = await axios.request(options).then((response) => {
				arrayJoke = response.data.body[0];
			}).catch(function (err) {
				console.log(err);
			});

			try {
				setJoke(arrayJoke.punchline);
				setUp(arrayJoke.setup);
			} catch(err){
				console.log(err);
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
			jokeAPI();
		}, []);

		return (
			<>
				<div className="card">
					<div className="card-heading">Random Jokes</div>
					<div className="card-container">
						<Card sx={{ maxWidth: 285, minHeight: 250 }}>
							<CardContent><div className="para">{setup}<br/>{jokes}
							</div></CardContent></Card></div>
					<div className="button-next" onClick={jokeAPI}>
						<Button variant="contained" color="success">
							Next
						</Button>
					</div>
				</div>
			</>
		)
	}
