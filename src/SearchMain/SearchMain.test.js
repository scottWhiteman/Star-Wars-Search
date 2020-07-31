import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchMain from '../SearchMain/SearchMain';

describe("SearchMain Component", () => {
    it('renders SearchMain without crash', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchMain />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders to the UI', () => {
        const tree = renderer.create(<SearchMain />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})