
import { mount } from 'enzyme';
import { Navbar } from './NavBar';
import { AuthContext } from './../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../types/types';
describe('probando <NavBar /> component', () => {

  const historyMock = {
    push: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
    replace: jest.fn()
  }

  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Pedro'
    }
  }


  const wrapper = mount( 
    <AuthContext.Provider value={contextValue} >
      <MemoryRouter>
        <Router history={historyMock} >
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  test('debe mostrar el navbar correctamente', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');

  });

  test('debe llamar el logout y usar history', () => {

    wrapper.find('button').prop('onClick')();

    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout
    });

    expect( historyMock.replace ).toHaveBeenCalledWith('/login');

  });
});