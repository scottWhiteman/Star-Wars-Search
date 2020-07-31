import React from 'react';
import './ResultsList.css';
import Result from '../Result/Result';

export default class ResultsList extends React.Component {
    static defaultProps = {
        results: []
    }
    
    renderList() {
        if (this.props.results.length <= 0) {
            return <h2>No results found!</h2>
        }
        return this.props.results.map((single, index) => {
            return <li key={index} className="Results-Item">
                    <Result
                        item={single}
                        category={this.props.category}/>
                </li>
        })
    }
    
    render() {
        return (
            <ul className="Results-List">
                {this.renderList()}
            </ul>  
        );
    }
}