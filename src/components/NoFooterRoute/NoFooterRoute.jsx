import React from 'react';
import { Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

const NoFooterRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        <Component {...props} />
        {props.location.pathname !== '/path/to/route' && <Footer />}
      </>
    )}
  />
);

export default NoFooterRoute;
