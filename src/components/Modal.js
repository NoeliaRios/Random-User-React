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
                    <button class="exit_button" onClick={() => this.props.handleUser('')}>
                        <i class="fas fa-times"></i>
                    </button>
                    <div className="top">
                        <h4><i class="fas fa-map-marker-alt"></i>{this.props.user.nat}</h4>
                        <div className="photo"><img src={this.props.user.picture.large} /></div>
                        <h4>{this.props.user.dob.age}</h4>
                    </div>
                    <div className="info">
                        <h1>{`${this.props.user.name.first} ${this.props.user.name.last}`}</h1>
                        <h2>@{this.props.user.login.username}</h2>
                        <p>"Alias labore facere quidem vero odit doloremque molestias? Sint quae consequatur corrupti quisquam? Quod, eius!"</p>
                        <p className="email">{this.props.user.email}</p>
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