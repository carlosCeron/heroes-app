import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from './AppRouter';
import { AuthContext } from './../auth/AuthContext';



describe('Pruebas en AppRouter', () => {


  test('debe de mostrar login si no esta autenticado', () => {

    const contextValue = {
      dispath: jest.fn(),
      user: {
        logged: false
      }
    };
  

    const wrapper = mount( 
      <AuthContext.Provider value={contextValue}>
        <AppRouter /> 
      </AuthContext.Provider>
    );

    
    expect(wrapper).toMatchSnapshot();

  });

  test('debe de mostrar el componente marvel si esta autenticado', () => {

    const contextValue = {
      dispath: jest.fn(),
      user: {
        logged: true,
        name: 'Pedro'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter /> 
      </AuthContext.Provider>
    )

    expect(wrapper.find('nav').exists()).toBe(true);

    })
})