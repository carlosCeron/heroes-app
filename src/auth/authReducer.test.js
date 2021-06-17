import { types } from "../types/types";
import { authReducer } from "./authReducer";

describe('pruebas en authReducer', () => {

  const state = {
    name: 'carlos',
    logged: false
  };

  test('debe de retornar el estado por defecto', () => {

    const newState = authReducer(state, {});

    expect(state).toEqual(newState);

  });

  test('debe de autenticar y colocar el name del usuario', () => {

    const newState = authReducer(state, {
      payload: {
        name: 'pedro',
        logged: true
      },
      type: types.login
    });


    expect(newState.name).toBe('pedro');
    expect(newState.logged).toBe(true);
  });


  test('debe de resetear el state', () => {

    const newState = authReducer(state, {
      payload: {},
      type: types.logout
    });

    expect(newState.logged).toBe(false);

  });

});