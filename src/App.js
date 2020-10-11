import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import ContactMessage from './Components/ContactMessage';
import Contact from './Components/Contact';
import './App.css';

library.add(fab)

export default class App extends Component {
	constructor(props){
    super(props);
    this.state = {
	      foo: 'bar',
	      resumeData: {}
	    };
	  }

	  getResumeData(){
	    $.ajax({
	      url:'/resumeData.json',
	      dataType:'json',
	      cache: false,
	      success: function(data){
	        this.setState({resumeData: data});
	      }.bind(this),
	      error: function(xhr, status, err){
	        console.log(err);
	        alert(err);
	      }
	    });
	  }

	  componentDidMount(){
	    this.getResumeData();
	  }

    render () {
        return (
        	<main role="main">
        		<Header data={this.state.resumeData.main}/>
        		<About data={this.state.resumeData.main} />
        		<Resume data={this.state.resumeData.resume} />
        		<Portfolio data={this.state.resumeData.portfolio} />
        		<ContactMessage />
        		<Contact data={this.state.resumeData.main} />
        	</main>
        );
    }
}
