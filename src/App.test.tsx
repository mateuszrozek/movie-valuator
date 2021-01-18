import React from 'react';
import App from './App';
import {shallow} from "enzyme";
import {Navbar} from "./app/Navbar";

it('renders navbar', () => {
    const wrapper = shallow(<App/>);
    const navbar = wrapper.find(Navbar);
    expect(navbar.exists()).toBe(true);
});