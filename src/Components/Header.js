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

        		<nav className="fixed-top">
        			<ul className="list-group list-group-horizontal bg-dark d-flex justify-content-center py-3">
        				<li className="list-group-item bg-transparent">
        					<a href="#home" className="list-group-link"><i class="fas fa-home px-2"></i>home</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#about" className="list-group-link"><i class="fas fa-user px-2"></i>about</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#resume" className="list-group-link"><i class="fas fa-file-alt px-2"></i>resume</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#portfolio" className="list-group-link"><i class="fas fa-folder-open px-2"></i>projects</a>
        				</li>
        				<li className="list-group-item bg-transparent">
        					<a href="#contact" className="list-group-link"><i class="fas fa-address-card px-2"></i>contact</a>
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