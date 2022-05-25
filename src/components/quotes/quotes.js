import React, { useState, useEffect } from 'react';
import './gobal.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from "axios";

export default function Quotes() {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	const quoteAPI = async () => {
		let arrayQuotes = [];
		try {
			const data = await axios.get("http://api.quotable.io/random");
			arrayQuotes = data.data;
		} catch (err) {
			console.log(err);
		}

		try {
			setQuote(arrayQuotes.content);
			setAuthor(arrayQuotes.author);
		}
		catch(err)
		{
			console.log(err);
		}
	};

	useEffect (() => {
		quoteAPI();
	}, [])
	return (
		<>
			<div className="card">
				<div className="card-heading">Random Quotes</div>
				<div className="card-container">
					<Card sx={{ maxWidth: 285, minHeight: 250 }}>
						<CardContent><div className='para'>{quote}
						</div><div className="author">-{author}</div></CardContent></Card></div>
				<div className="button-next" onClick = {quoteAPI}>
					<Button variant="contained" color="success">
						Next
					</Button>
				</div>
			</div>
		</>
	)
}
