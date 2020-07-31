import React from 'react';
import {Route, Link} from 'react-router-dom';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import SearchBox from '../SearchBox/SearchBox';
import ResultsList from '../ResultsList/ResultsList';
import './SearchMain.css';

export default class SearchMain extends React.Component {
    state ={
        results: [],
        category: ''
    }
    
    Loading = () => {
        const { promiseInProgress } = usePromiseTracker();
        return (
            promiseInProgress &&
            <div className="Loading-Container">
                <h1>Searching </h1>
                <Loader type="ThreeDots" color="#eacc22" height="100" width="100" />
            </div>
        );
    }

    setData = (data, category) => {
        this.setState(
            {
                results : data,
                category
            }
        );
        console.log(this.state);
    }

    renderResultsList() {
        return (
            <>
                <Route
                    path="/"
                    render={routeProps => (
                        <ResultsList
                            results={this.state.results}
                            category={this.state.category}
                            {...routeProps}/>
                    )}
                />
            </>
        );
    }

    render() {
        return (
            <main className="Search-Main">
                <SearchBox setData={this.setData}/>
                <this.Loading />
                {this.state.results.length > 0 && this.renderResultsList()}
            </main>
        );
    }
}