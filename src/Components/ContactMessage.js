import React, { Component } from 'react';

export default class ContactMessage extends Component {
  render() {
  	return (
  		<section id="contact">
  			<div className="text-center">
  				<div className="py-5">
  					<h1 className="display-3 pt-4 mt-5 mb-2">Are you interested ?</h1>
  				</div>
  				<div className="h4 text-muted mb-5 pb-5">
  					<p>Whether you have an interesting project or just</p>
  					<p>want to say hi, feel free to shoot me a message.</p>
  				</div>
  			</div>
  		</section>
  	);
  }
}