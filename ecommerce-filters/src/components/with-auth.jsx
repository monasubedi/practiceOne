import React from 'react'
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const isAuthenticated = false;
    if(!isAuthenticated){
        return <Redirect to="/login" />
    }
    return <WrappedComponent {...props} />
  }
  return AuthComponent;
}

export default withAuth