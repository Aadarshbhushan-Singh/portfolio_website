import React from 'react'
import './CentreText.css'
import myImage from '../../Assets/MyImage.png'
import { Link } from 'react-router-dom'

export const CentreText = () => {
	return (
		<>
			<div className='centre_text_whole'>
				<div className="centre_text_left_part">
					<p>Hello, I'm <b>Aadarshbhushan Singh</b></p>
					<h4>I am a Computer Engineer</h4>
					<Link to="/profile" id="explore_more_button">Explore More</Link>
				</div>
				<div className="centre_text_right_part">
						<img src={myImage} alt="My Image" />
				</div>
			</div>
		</>
	)
}
