import React from 'react';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
    };

    this.onAddName = this.onAddName.bind(this);
    this.onAddUsername = this.onAddUsername.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onAddName = (e) => {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  };

  onAddUsername = (e) => {
    this.setState(() => {
      return {
        username: e.target.value,
      };
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.addContact(this.state);
  };

  render() {
    return (
      <div className="flex items-center justify-center mt-36">
        <div className="container w-1/4 p-7 rounded-lg border border-gray-500">
          <form onSubmit={this.onSubmitHandler} className="flex flex-col">
            <label>Name</label>

            <input className="border border-gray-500 rounded p-1 w-full mb-3" type="text" placeholder="Enter your name" value={this.state.name} onChange={this.onAddName} />

            <label>Username</label>

            <input className="border border-gray-500 rounded p-1 w-full mb-3" type="text" placeholder="Enter your username" value={this.state.username} onChange={this.onAddUsername} />

            <div className="flex justify-end">
              <button className="bg-emerald-400 hover:bg-emerald-600 w-24 rounded" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactInput;
