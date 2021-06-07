import React from 'react';
import { shallow } from "enzyme";
import LoginScreen from "./LoginScreen";


describe('Debe renderizar el componente login', () => {

  test('Evalua el componente LoginScreen', () => {

    let wrapper = shallow(<LoginScreen />);

    expect(wrapper).toMatchSnapshot();

  });

});