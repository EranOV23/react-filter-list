import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		}
	}

	handelClick(e){
		this.props.setFliterValue(e.target.value)
	}

    render() {
        return (
        <div className="Search">
        	<h1>Serach by user first name</h1>
        	<input onChange={(e)=> this.handelClick(e) }/>
        </div>
        )
    }

}