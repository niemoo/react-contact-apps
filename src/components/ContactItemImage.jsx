import React from 'react';

const ContactItemImage = ({ imageUrl }) => {
  return (
    <>
      <div>
        <img src={imageUrl} className="rounded-full m-3 w-16" />
      </div>
    </>
  );
};

export default ContactItemImage;
