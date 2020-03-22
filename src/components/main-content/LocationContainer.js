import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateLocation } from '../../actions/location.action';
import locationIcon from '../../images/travel.svg';

function LocationContainer({ updateLocation, location: { location } }) {
  const initialState = {
    pincode: '',
    isFormVisible: `${location ? false : true}`
  };

  const [formData, setFormData] = useState(initialState);

  const { pincode, isFormVisible } = formData;

  const clearState = () => {
    setFormData({ ...initialState });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    if (!isNaN(value.trim())) {
      setFormData({ ...formData, [name]: value.trim() });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (pincode.trim() !== '' && pincode !== location) {
      updateLocation(pincode);
      setFormData({ ...formData, isFormVisible: !isFormVisible });
    } else if (pincode === location) {
      setFormData({ ...formData, isFormVisible: !isFormVisible });
    } else {
      clearState();
    }
  };

  return (
    <div className='location-container '>
      <div className='img-container'>
        <img src={locationIcon} alt={locationIcon}></img>
      </div>

      <div className='info-display'>
        <p>Enter your pincode for nearest stores &amp; faster delivery options.</p>
      </div>

      {location && (
        <div className='pincode-display-container'>
          <p className='pincode-text'>
            Pincode: <span>{location}</span>
          </p>
        </div>
      )}

      <div className='form-container'>
        {isFormVisible ? (
          <form onSubmit={e => onSubmit(e)}>
            <input
              type='text'
              name='pincode'
              placeholder={pincode ? pincode : 'Enter pincode'}
              value={pincode}
              onChange={e => handleChange(e)}
            />
            <button className='btn btn-sm btn-default' type='submit'>
              Submit
            </button>
          </form>
        ) : (
          <button
            className='btn btn-sm btn-dark change-location-btn'
            onClick={e => {
              setFormData({ ...formData, isFormVisible: !isFormVisible });
            }}
          >
            Change
          </button>
        )}
      </div>
    </div>
  );
}

LocationContainer.propTypes = {
  updateLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  location: state.location
});

export default connect(mapStateToProps, { updateLocation })(LocationContainer);
