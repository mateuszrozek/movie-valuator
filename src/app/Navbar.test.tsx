import {shallow} from "enzyme";
import React from "react";
import {Navbar} from "./Navbar";

it('renders apps title', () => {
    const wrapper = shallow(<Navbar/>);
    const title = wrapper.find('h1').text();
    expect(title).toBe('Wyceniacz');
});

it('renders first link', () => {
    const wrapper = shallow(<Navbar/>);
    const link = wrapper.find('#calculator');
    expect(link.text()).toBe('Kalkulator');
    expect(link.props().to).toBe('/');
});

it('renders second link', () => {
    const wrapper = shallow(<Navbar/>);
    const link = wrapper.find('#configuration');
    expect(link.text()).toBe('Konfiguracja');
    expect(link.props().to).toBe('/config');
});