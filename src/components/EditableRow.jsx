import React from 'react';

export default function Editable({ editFormData, handleEditFormChange, handleCancelEdit }) {
    return (
      <tr>
        <td>
          <input
            type="text"
            placeholder="enter contact name"
            name="fullName"
            value={editFormData.fullName}
            required="required"
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="enter contact address"
            name="address"
            value={editFormData.address}
            required="required"
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="email"
            placeholder="enter contact email"
            name="email"
            value={editFormData.email}
            required="required"
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="enter contact phone number"
            name="phoneNumber"
            value={editFormData.phoneNumber}
            required="required"
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        </td>
      </tr>
    );
  };
  