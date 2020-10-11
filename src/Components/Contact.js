import React, { useState } from 'react';

const Contact = ({ data }) => {
	const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	console.log(data);

	const handleClick = (e) => {
		e.preventDefault();
		window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
	}

  	return (
  		<section id="contact">
 			<div className="d-flex bg-dark text-white shadow-lg justify-content-center">
 				<div className="p-2 p-md-4 mx-5">
 					<form action="" className="form-group">
 						<div>
 							<label className="form-label" htmlFor="contactName">Name: </label>
 							<input 
 							value={name} 
 							onChange={e => setName(e.target.value)} 
 							className="form-control border-0 bg-light rounded-0" 
 							type="text" 
 							defaultValue="" 
 							id="contactName" 
 							name="contactName" />
 						</div>
 						<div>
 							<label className="form-label" htmlFor="contactEmail">Email: </label>
 							<input 
 							value={email} 
 							onChange={e => setEmail(e.target.value)} 
 							className="form-control border-0 bg-light rounded-0" 
 							type="text" 
 							defaultValue="" 
 							id="contactEmail" 
 							name="contactEmail"/>
 						</div>
 						<div>
 							<label className="form-label" htmlFor="contactSubject">Subject: </label>
 							<input 
 							value={subject} 
 							onChange={e => setSubject(e.target.value)} 
 							className="form-control border-0 bg-light rounded-0" 
 							type="text" 
 							defaultValue="" 
 							id="contactSubject"
 							 name="contactSubject"/>
 						</div>
 						<div>
 							<label className="form-label" htmlFor="contactMessage">Message: </label>
 							<textarea 
 							value={message} 
 							onChange={e => setMessage(e.target.value)} 
 							className="form-control border-0 bg-light rounded-0" 
 							cols="50" 
 							rows="15" 
 							id="contactMessage" 
 							name="contactMessage"></textarea>
 						</div>
 						<div>
 							<button type="submit" onClick={handleClick} className="btn btn-dark">Submit</button>
 						</div>
 					</form>
 				</div>
 			</div>
  		</section>
  	);
}

export default Contact