import React from 'react';

export default class Result extends React.Component {
    formatRender() {
        switch (this.props.category) {
            case 'people':
                return this.formatPerson();
            case 'species':
                return this.formatSpecies();
            case 'films':
                return this.formatFilm();
            case 'planets':
                return this.formatPlanet();
            case 'vehicles':
                return this.formatVehicle();
            case 'starships':
                return this.formatShip();
            default:
                return <h2>That Category does not exist!</h2>
        }
    }
    
    formatPerson = () => {
        return (
            <>
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.species}</p>
                <p>{this.props.item.homeworld}</p>
            </>
        );
    }

    formatSpecies = () => {
        return (
            <>
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.classification}</p>
                <p>{this.props.item.designation}</p>
                <p>{this.props.item.homeworld}</p>
            </>
        );
    }

    formatFilm = () => {
        return (
            <>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.created}</p>
                <p>{this.props.item.director}</p>
            </>
        );
    }

    formatPlanet = () => {
        return (
            <>
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.diameter}</p>
                <p>{this.props.item.population}</p>
            </>
        );
    }

    formatVehicle = () => {
        return (
            <>
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.model}</p>
                <p>{this.props.item.vehicle_class}</p>
            </>
        );
    }

    formatShip = () => {
        return (
            <>
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.model}</p>
                <p>{this.props.item.length}</p>
                <p>{this.props.item.hyperdrive_rating}</p>
            </>
        );
    }

    render() {
        return (
            <div className="Result-Container">
                {this.formatRender()}
            </div>
        );
    }
}