import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Result from './Result';

describe("Result componenet test", () => {
    it('renders Result without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Result />, div)
    ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Result to UI without data', () => {
        const tree = renderer.create(<Result />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    const item = {
        name: "Darth",
        species: "Helmet",
        homeworld: "Space"
    }
    const category = "people";

    it('renders Result to UI with data', () => {
        const tree = renderer.create(<Result item={item} category={category}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})