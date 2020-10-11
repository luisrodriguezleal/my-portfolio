import React, { Component } from 'react';

export default class About extends Component {
    render () {

    	if (this.props.data) {
    		var name = this.props.data.name;
    		var bio = this.props.data.bio;
		    var state = this.props.data.address.state;
		    var zip = this.props.data.address.zip;
		    var email = this.props.data.email;
		    var message = this.props.data.contactmessage;
    	}

    	return (

    		<section id="about" className="bg-light py-2">
    			<div className="container text-secondary text-center">
	    			<hgroup className="mt-4">
	    				<h1 className="display-3 m-0 mb-4 py-3">HI THERE</h1>
	    				<h4 className="h4">¿How are you?</h4>
	    			</hgroup>
						
	    			<div>
	    				<p className="lead">{bio}</p>
	    				<p className="lead">{state}, {zip}</p>
	    				<br />
	    				<p className="border-bottom pb-4">Contact</p>
	    				<h2 className="mb-4">{email}</h2>
	    				<br/>
	    			</div>
    			</div>
    		</section>
    	)
    }
}