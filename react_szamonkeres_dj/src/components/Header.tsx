import { Component } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export default class Header extends Component {
    render() {
        return <div>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand">PetrikDj</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Főoldal</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/tapasztalat">Szakmai tapasztalat</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/idopont ">Időpontfoglalás</NavLink>
                    </li>

                    </ul>
                </div>
                </nav>
            </header>
        </div>
    }
}