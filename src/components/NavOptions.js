import piggy from '../porco.png'
import React from 'react'

function NavOptions(props) {
    console.log(props)


	return (
		<div className="navWrapper">
            <button onClick={props.greasedClicked}>{(props.greased ? "Not Greased" : "Greased")}</button>
            <button onClick={props.sortOpChange} id="name">Sort By Name</button>
            <button onClick = {props.sortOpChange} id="weight">Sort By Weight</button>
            <button onClick = {props.bringBackHogs}>Bring Back Hogs</button>
		</div>
	)
}

export default NavOptions