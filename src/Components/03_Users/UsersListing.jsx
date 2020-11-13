import React from "react";

export default function UsersListing({ users }) {
  console.log(users);
  return (
    <div style={{ width: "100%" }}>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Instrucotr</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Edit</th>
            <th>
              {users
                ? users.instructor
                  ? "Workshops given"
                  : " Wprksops participated"
                : null}
            </th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
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
            ))
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
