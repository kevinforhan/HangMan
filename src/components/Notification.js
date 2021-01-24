import React from "react";

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p> Oh no you've already entered this letter :(</p>
    </div>
  );
};

export default Notification;
