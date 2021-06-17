import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './../../auth/AuthContext';
import { types } from '../../types/types';


const init = () => {
  return JSON.parse(localStorage.getItem('user')) || {
    logged: false
  };
}


const LoginScreen = ({history}) => {

  const {dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    
    history.push('/');

    const action = {
      type: types.login,
      payload: {
        name: 'Pedro'
      }
    }

    dispatch(action);

    history.replace('/');

  }


  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  )
}

LoginScreen.propTypes = {
  history: PropTypes.object.isRequired
}

export default LoginScreen
