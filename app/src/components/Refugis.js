import React from 'react'
import { useParams } from 'react-router-dom';

function Refugis() {
	const nombers = [1, 2, 3, 4, 5]


	const { id } = useParams();

	return (
		<>
			<h1>Llistat de refugis</h1>
			<ul>
				<li><a href="/refugis/1">Refugi 1</a></li>
				<li><a href="/refugis/2">refugi 2</a></li>
			</ul>
			<p>El refugi escollit es el {id}</p>
		</>
	)
}

export default Refugis