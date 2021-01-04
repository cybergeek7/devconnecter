import React, { Fragment } from 'react';
import error404 from '../../img/error-404.jpg';

const NotFound = () => {
  return (
    <Fragment>
      <img
        src={error404}
        style={{ width: '600px', margin: 'auto', display: 'block' }}
        alt='Error404'
      />
    </Fragment>
  );
};

export default NotFound;
