import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchBox from './SearchBox';

describe("Result componenet test", () => {
    it('renders Result without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<SearchBox />, div)
        ReactDOM.unmountComponentAtNode(div);
    });
})