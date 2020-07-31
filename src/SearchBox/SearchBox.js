import React from 'react';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import { trackPromise } from 'react-promise-tracker';

export default class SearchBox extends React.Component {
    state = {
        error: ''
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { search, category } = e.target;
        this.props.setData([], category.value);
        trackPromise(
            fetch(`https://swapi-thinkful.herokuapp.com/api/${category.value}/?search=${search.value}`)
                .then(res => {
                    if(!res.ok) {
                        return res.json().then(e => Promise.reject(e));
                    }
                    return res.json();
                })
                .then(data => {
                    this.props.setData(data.results, category.value);
                })
                .catch(err => {
                    console.log(err);
            }));
    }

    emptyResults = (data) => {
        return data.results.length === 0;
    }

    render() {
        return (
            <div className="Search-Container">
                <form className="Search-Form" onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" name="search"/>
                    <button type="submit">Search!</button>
                    <select name="category">
                        <option value="people">Characters</option>
                        <option value="species">Species</option>
                        <option value="films">Films</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Spaceships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                </form>
                {/* <ErrorHandler error={this.state.error}/> */}
            </div>
        );
    }
}