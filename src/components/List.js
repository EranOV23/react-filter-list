import React, { Component } from 'react';

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayList: []
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.usersList){
			this.filterList(nextProps.usersList, nextProps.fliterValue)
		}
	}

	filterList(list, value){
		let filteredList = list.filter( (user) => user.first_name.toString().toLowerCase().includes(value))
		this.setList(filteredList)
	}

	setList(list){
		this.setState({
			displayList: list
		})		
	}

	renderUsers(user, i){
		return (
			<li key={i}>
				<img src={user.avatar}/>
				<h3>{user.first_name} {user.last_name}</h3>
				<p>{user.email}</p>
			</li>
		)
	}

    render() {
        return (
        <div className="list">
        	<h2>List of users</h2>
        	<ul>
				{this.state.displayList.map(this.renderUsers.bind(this))}
        	</ul>
        </div>
        )
    }

}