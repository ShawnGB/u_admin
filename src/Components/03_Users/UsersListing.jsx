import React from "react";
import UserComponent from "./UserComponent";

export default function UsersListing({ users }) {
  return (
    <div style={{ width: "100%" }}>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Instrucotr</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>participated</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => <UserComponent user={user} key={user.id} />)
          ) : (
            <tr>
              <td colSpan={6}>No Users yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
