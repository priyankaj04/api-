import React from 'react';
import Quote from '../../components/quotes/quotes';
import Joke from '../../components/jokes/jokes';
import Fact from '../../components/facts/facts';
import './body.css';

export default function body() {
	return (
		<>
			<div className="body-container">
				<Quote />
				<Joke />
				<Fact />
			</div>
		</>
	)
}
