import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <div>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} id={contact.id} onDelete={onDelete} {...contact} />
        ))}
      </div>
    </>
  );
};

export default ContactList;
