import React, { Component } from 'react';

export default class Resume extends Component {
    render () {

    	if(this.props.data) {
    		var school = this.props.data.education.school;
    		var degree = this.props.data.education.degree;
    		var graduated = this.props.data.education.graduated;
    		var description = this.props.data.education.description;
    		var skills = this.props.data.skills.map((skill) => {
    			return <li key={skill.name} className="mb-2">
    				<span className="text-uppercase">{skill.name}</span>
    				</li>
    		})
    	}

    	return (
    		<section id="resume" className="bg-dark py-5">
    			
    			<div className="container p-4 mt-2 py-2">
	    			<div className="row text-white">
	    				<div className="col-md-8 lead border-right border-top shadow-lg">
	    					<div className="py-3">
	    						<h3>Education</h3>
	    					</div>
	    					<h4>{school}</h4>
	    					<p className="m-0">{degree}</p>
	    					<p className="m-0">{graduated}</p>
	    					<p className="m-0">{description}</p>
	    				</div>

	    				<div className="col-md-4">
	    					<div className="py-3">
	    						<h3>Skills</h3>
	    					</div>
	    					<div>
		    					<ul className="list-unstyled">
		    					{skills}
		    					</ul>
	    					</div>
	    				</div>
	    			</div>
    			</div>

    		</section>
    	)
    }
}
