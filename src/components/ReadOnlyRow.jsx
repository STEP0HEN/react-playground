import React from "react";


export default function ReadOnly({ contact, handleEdit }) {
    return (
      <tr key={contact.address}>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.email}</td>
        <td>{contact.phoneNumber}</td>
        <td>
          <button type="button" onClick={(event) => handleEdit(event, contact)}>
            Edit
          </button>
        </td>
      </tr>
    );
  };