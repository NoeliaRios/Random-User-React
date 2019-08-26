import React, {Component} from 'react';
import './users.scss';

class Users extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    };    
    
    render(){
        return(
            this.state?
            <div className="user" onClick={() => this.props.handleUser(this.props.data)}>
                <div className="small_photo"><img src={this.props.data.picture.medium}/></div>
                <h1>{`${this.props.data.name.first} ${this.props.data.name.last}`}</h1>
                <h2>@{this.props.data.login.username}</h2>
                <h3><i class="fas fa-map-marker-alt"></i>{`${this.props.data.location.city} - ${this.props.data.nat}`}</h3>                
            </div>
            :''
        )
    }
}

export default Users;
