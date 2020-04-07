import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getAllNotifications,
  clearNotification,
  clearAllNotifications,
} from '../../actions/notification.action';

function NotificationBox({
  getAllNotifications,
  clearNotification,
  clearAllNotifications,
  notification: { notification, loading },
}) {
  const handleRemove = (index) => {
    clearNotification(index);
  };
  const handleClearAllBtn = () => {
    clearAllNotifications();
  };
  return (
    <Fragment>
      {notification.length > 0 && (
        <div className='badge'>
          <p>{notification.length}</p>
        </div>
      )}
      <div className='triangle'></div>
      <div className='nav-dropdown-item-container notification-list-container'>
        <div className='notification-heading'>Notifications</div>
        <ul className='notification-list text-left'>
          {notification.length > 0 ? (
            notification.map((item, index) => (
              <li className='item'>
                <div className='item-text'>{item.text}</div>
                <span
                  className='clear-btn material-icons'
                  title='Remove'
                  onClick={() => handleRemove(index)}
                >
                  close
                </span>
              </li>
            ))
          ) : (
            <li className='item'>
              <div className='item-text'>No Notifications Yet!</div>
            </li>
          )}
        </ul>
        {notification.length > 0 && (
          <div className='notification-footer'>
            <button className='clear-all-btn' onClick={handleClearAllBtn}>
              Clear All
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
}

NotificationBox.propTypes = {
  getAllNotifications: PropTypes.func.isRequired,
  clearNotification: PropTypes.func.isRequired,
  clearAllNotifications: PropTypes.func.isRequired,
  notification: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps, {
  getAllNotifications,
  clearNotification,
  clearAllNotifications,
})(NotificationBox);
