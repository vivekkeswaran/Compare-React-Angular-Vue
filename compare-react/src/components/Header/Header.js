import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };

        this.handleClick = this
            .handleClick
            .bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {

        let menuActive = this.state.isToggleOn
            ? 'is-active'
            : '';

        return (
            <div className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        Sample Template With React
                    </a>

                    <button className={"button navbar-burger " + menuActive} onClick={this.handleClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div className={"navbar-menu " + menuActive}>
                    <div className="navbar-end">
                        <Link to="/" className="nav-item r-item">Home</Link>
                        <Link to="/faq" className="nav-item r-item">Features</Link>
                        <Link to="/faq" className="nav-item r-item">About</Link>
                        <Link to="/faq" className="nav-item r-item">FAQ</Link>

                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-primary">
                                        <span className="icon">
                                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                                        </span>
                                        <span>Join Now</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;