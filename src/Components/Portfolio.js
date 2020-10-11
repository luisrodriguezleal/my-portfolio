import React, { Component } from 'react';

export default class Portfolio extends Component {
    render () {

    	if(this.props.data) {
    		var projects = this.props.data.projects.map((pro) => {
    			var img_project = 'images/portfolio/'+pro.image;
    			return <div key={pro.title} className="d-flex flex-row justify-content-center">
	    			<div>
	    				<h1>{pro.title}</h1>
	    				<h4>{pro.category}</h4>
	    			</div>
	    			<div>
	    				<a href={pro.url} title={pro.title}>
	    					<img src={img_project} alt={pro.title} className="img-responsive" width="256"/>
	    				</a>
	    			</div>
    			</div>
    		})
    	}

    	return (
    		<section id="#portfolio">
	    		<div className="bg-light p-5">
	    			<div className="pb-5 mt-4 border-bottom">
	    				<h1>Check out some of my works</h1>
	    			</div>
	    			<div className="d-flex justify-content-between my-5">
	    				{projects}
	    			</div>
	    		</div>
    		</section>
    	);
    }
}
