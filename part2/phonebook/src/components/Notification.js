import React from 'react';

export default function Notification({ success, message }) {
  let className = success ? 
    'success-notification' : 'error-notification';

  if (message === null) {
    return null;
  }

  return (
    <div className={className}>
      {message}
    </div>
  )

  // return (
  //   <div className="error-notification">
  //     {message}
  //   </div>
  // )
}
