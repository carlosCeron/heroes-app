import React from 'react'
import PropTypes from 'prop-types'

const LoginScreen = ({history}) => {


  const handleLogin = () => {
    
    history.push('/');

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

}

export default LoginScreen
