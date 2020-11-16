import React, { useState } from "react";

export default function UserComponent({ user }) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <tr key={user.ID}>
      <td>{user.ID}</td>
      <td>{user.Instructor ? "yes" : "no"}</td>
      <td>{user.FirstName}</td>
      <td>{user.LastName}</td>
      <td>0</td>
      <td>
        <button>Edit information</button>
      </td>
    </tr>
  );
}
