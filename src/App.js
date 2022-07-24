import React, {useState, Fragment} from 'react';
import Editable from './components/EditableRow';
import ReadOnly from './components/ReadOnlyRow';
import { nanoid } from 'nanoid';
import './App.css';
const mockData = require('./mockData.json');
console.log(mockData);

export default function App() {
  const [data, setData] = useState(mockData);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  const [editContactId, setEditContactId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""
  });

  const handleFormData = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    console.log(fieldValue, fieldName, newFormData);
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: formData.fullName,
      address: formData.address,
      email: formData.email,
      phoneNumber: formData.phoneNumber
    };
    const newContacts = [...data, newContact];
    setData(newContacts);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const editContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      email: editFormData.email,
      phoneNumber: editFormData.phoneNumber
    };

    const newContacts = [...data];

    const index = data.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editContact;
    setData(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      email: contact.email,
      phoneNumber: contact.phoneNumber
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleCancelEdit = () => {
    setEditContactId(null);
  };
  
  return (
    <div className="App">
      <form onSubmit={handleEditSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d) => (
              <Fragment>
                {editContactId === d.id ? (
                  <Editable
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelEdit={handleCancelEdit}
                  />
                ) : (
                  <ReadOnly contact={d} handleEdit={handleEditClick} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter contact name"
          name="fullName"
          required="required"
          onChange={handleFormData}
        />
        <input
          type="text"
          placeholder="enter contact address"
          name="address"
          required="required"
          onChange={handleFormData}
        />
        <input
          type="email"
          placeholder="enter contact email"
          name="email"
          required="required"
          onChange={handleFormData}
        />
        <input
          type="number"
          placeholder="enter contact phone number"
          name="phoneNumber"
          required="required"
          onChange={handleFormData}
        />
        <button type="submit">Add Contact </button>
      </form>
    </div>
  );
}
