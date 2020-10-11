import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Header extends Component {
    render () {

    	if(this.props.data) {
    		var name = this.props.data.name;
    		var network = this.props.data.social.map(function(net) {
    			return <li className="px-3 my-2" key={net.name}><a href={net.url}><FontAwesomeIcon icon={['fab', net.image]} size="3x" /></a></li>
    		});
    	}

        return (
        	<header id="home" className="shadow-lg">

        		<nav>
        			<ul className="list-group list-group-horizontal bg-dark">
        				<li className="list-group-item bg-transparent">
        					<a href="#home" className="list-group-link">home</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#about" className="list-group-link">about</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#resume" className="list-group-link">resume</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#portfolio" className="list-group-link">portfolio</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#contact" className="list-group-link">contact</a>
        				</li>
        			</ul>
        		</nav>
        		<canvas width="10%" height="500px"></canvas>
        		<div className="d-flex justify-content-end mt-4">
        			<div className="text-white px-2 m-4">
        				<h3 className=""> Hey,</h3>
        				<h1 className="h1">i'm {name}</h1>
	        			<div className="border-top ">
	        				<ul className="list-group list-group-horizontal list-unstyled mt-2">
	        					{network}
	        				</ul>
	        			</div>
        			</div>

        		</div>

        	</header>
        );
    }
}