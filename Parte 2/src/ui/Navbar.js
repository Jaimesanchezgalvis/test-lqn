import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link
                        className="navbar-brand"
                        to="/">
                        Star Wars</Link>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/films"
                            >
                                Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/people"
                            >
                                People</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/planets"
                                >
                                Planet</Link>
                        </li><li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/species"
                                >
                                Species</Link>
                        </li><li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/startships"
                                >
                                Startships</Link>
                        </li><li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/vehicles"
                                >
                                Vehicles</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}
