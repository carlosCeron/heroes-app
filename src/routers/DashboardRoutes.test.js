import { shallow, mount } from 'enzyme';
import React from 'react'
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from './../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';



describe('probando el DashboardRoutes', () => {

  test('debe mostrarse correctamente', () => {

    const contextValue = {
      dispath: jest.fn(),
      user: {
        logged: true,
        name: 'Pedro'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');

  });

});