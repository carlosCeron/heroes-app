import React from 'react';
import { shallow, mount } from "enzyme";
import PrivateRoutes from './PrivateRoutes';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en Private Route', () => {


  test('debe mostrar el componente si esta autenticado y guardar LocalStorage', () => {
    const wrapper = mount( 
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={true}
          component={() => <h1>Listo</h1>}
        /> 
      </MemoryRouter>
    );

    expect(wrapper.find('h1').exists()).toBe(true);

  });

  test('debe de bloquear el componente si no esta autenticado', () => {

    const wrapper = mount( 
      <MemoryRouter>
        <PrivateRoutes
          isAuthenticated={false}
          component={() => <h1>Listo</h1>}
        /> 
      </MemoryRouter>
    );

    expect(wrapper.find('h1')).toEqual({});

  });
  


});