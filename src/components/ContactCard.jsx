import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

const ContactCard = ({ imageUrl, name, username, id, onDelete }) => {
  return (
    <>
      <div className="container m-2 w-1/4 mx-auto flex flex-wrap border border-gray-300 rounded-xl">
        <ContactItemImage imageUrl={imageUrl} />
        <ContactItemBody name={name} username={username} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </>
  );
};

export default ContactCard;
