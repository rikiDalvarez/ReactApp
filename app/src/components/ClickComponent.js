import React, { useState } from 'react'

function ClickComponent() {
	const [click, setClick] = useState(0)
	return (
		<div className='border border-danger p-5 m-5'>
			<h1>you clicked {click}</h1>
			<button className="btn btn-primary" onClick={() => setClick(click + 1)}>test click</button>
		</div>
	)
}

export default ClickComponent