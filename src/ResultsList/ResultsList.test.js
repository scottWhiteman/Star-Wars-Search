import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResultsList from './ResultsList';

describe("Results List Component", () => {
    const props = {
        results: [
            {
                "name": "Luke",
                "species": "Test",
                "homeworld": "JavaScript"
            },
            {
                "name": "Darth",
                "species": "Helmet",
                "homeworld": "Space"
            },
            {
                "name": "Burrito",
                "species": "Food",
                "homeworld": "Fridge"
            }
        ]
    }

    it("renders without crashing", () => {
        const div = document.createElement('div');
        ReactDOM.render(<ResultsList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it("renders empty list", () => {
        const tree = renderer.create(<ResultsList results={[]}/>).toJSON()
        expect(tree).toMatchSnapshot()
    });

    it("renders each item result", () => {
        const tree = renderer.create(<ResultsList results={props.results}/>).toJSON()
        expect(tree).toMatchSnapshot()
    });
})