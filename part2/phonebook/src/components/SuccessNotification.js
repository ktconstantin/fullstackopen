import React from 'react';

export default function SuccessNotification({ message }) {
  if (message === null) {
    return null;
  }

  return (
    <div className="success-notification">
      {message}
    </div>
  )
}
