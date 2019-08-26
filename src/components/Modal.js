import React, { Component } from 'react';
import './modal.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div className="modal">
                <div className="box_modal">
                    <div className="top">
                        <h1><i class="fas fa-map-marker-alt"></i>{this.props.user.nat}</h1>
                        <img src={this.props.user.picture.large} />
                        <h1>{this.props.user.dob.age}</h1>
                    </div>
                    <div className="info">
                        <h1>{`${this.props.user.name.first} ${this.props.user.name.last}`}</h1>
                        <h2>@{this.props.user.login.username}</h2>
                        <p>lorem</p>
                        <p>{this.props.user.email}</p>
                    </div>
                    <div className="footer">
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                        <a href=""><i class="fab fa-github"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Modal;