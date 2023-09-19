import React from 'react';

const ContactItemBody = ({ name, username, id }) => {
  return (
    <>
      <div className="my-auto">
        <p className="font-medium">{name}</p>
        <p className="text-xs">@{username}</p>
      </div>
    </>
  );
};

export default ContactItemBody;
