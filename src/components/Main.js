import React, { Component } from 'react';
import Search  from './Search';
import List  from './List';


export default class Main extends Component {
	constructor(props) {
		super(props);
		this.getAllUsers()
		this.state = {
			usersList: [],
			fliterValue: "",
		}
	}

	getAllUsers(){
		fetch("./static/data/users.json")
		.then( (response) => response.json() )
		.then( (response) => {
				this.setState({
					usersList: response
				})
			}
		)
	}

	setFliterValue(value){
		this.setState({
			fliterValue: value
		})
	}

    render() {

        return (
        <div className="main">
            <Search setFliterValue={this.setFliterValue.bind(this)} />
            <List usersList={this.state.usersList} fliterValue={this.state.fliterValue} />
        </div>
        )
    }

}