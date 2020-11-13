import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WorkshopListing() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  console.log(users);
  return (
    <div style={{ width: "100%" }}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
