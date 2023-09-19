import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactInput from './components/ContactInput';
import { getData } from './utils/data';

function App() {
  const [data, setData] = useState(getData());

  const deleteContact = (id) => {
    const updatedContacts = data.filter((contact) => contact.id !== id);
    setData(updatedContacts);
  };

  const nambahContact = ({ name, username }) => {
    setData((prevData) => [
      ...prevData,
      {
        id: +new Date(),
        name,
        username,
        imageUrl: '/assets/default.jpg',
      },
    ]);
  };

  return (
    <>
      <div>
        <ContactInput addContact={nambahContact} />

        <div className="mt-40">
          <ContactList contacts={data} onDelete={deleteContact} />
        </div>
      </div>
    </>
  );
}

export default App;
