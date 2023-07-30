import React from 'react'

function functional({ returnData }) {
	const data = "AHHH putao"
	return (
		<div className='border border-danger p-5 m-5'>
			<button className='btn btn-primary' onClick={() => returnData(data)}>click me</button>
		</div>
	)
}

export default functional;