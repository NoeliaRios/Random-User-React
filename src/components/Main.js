import React, { Component } from 'react';
import Users from './Users';
import './main.scss';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    };

    componentDidMount(){
        const API = `https://randomuser.me/api/?results=20`;
        fetch(API)
            .then ( res => res.json())
            .then(json => this.setState({
                users:json.results
            }))
    }

    render() {
        return (
            <div className="Main">
                    {/* <button className="button_more" onClick={}>More Random Users</button> */}
                <div className= "container__users">
                 {this.state.users.map(u => <Users data={u} handleUser={this.props.handleUser}/>)}
                    {/* //  <div>{u.name.first}<button onClick={this.props.greet}>Greet</button></div>)}
                //  <Users greetU={this.props.greet} /> */}
                </div>
                
            </div>
        )
    }
}

export default Main;