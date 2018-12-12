import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<App />);
});

it('renders two titles', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.Title').length).toBe(2);
});

it('renders four links', () => {
   const wrapper = shallow(<App/>);
   expect(wrapper.find('.App-link').length).toBe(5);
});

it('renders image', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App-logo').length).toBe(1);
 });