import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<App />);
});

it('renders the title', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.Title').length).toBe(1);
});

it('renders four links', () => {
   const wrapper = shallow(<App/>);
   expect(wrapper.find('.App-link').length).toBe(4);
});