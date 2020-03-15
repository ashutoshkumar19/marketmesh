import React from 'react';

const NotFound = () => {
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <h1>
        <i className='fas fa-exclamation-triangle'></i> Page Not Found
      </h1>
      <h1 className=''>Sorry, this page does not exist</h1>
    </div>
  );
};

export default NotFound;
