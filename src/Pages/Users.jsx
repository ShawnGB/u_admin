import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import axios from "axios";
import UsersListing from "../Components/03_Users/UsersListing";
import AddUsersFrom from "../Components/03_Users/AddUsersFrom";

export default function Users() {
  const [users, setUsers] = useState();
  const [openDialog, setOpenDialog] = useState(false);

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

  return (
    <div style={{ height: "70vh" }}>
      <Dialog
        onBackdropClick={() => setOpenDialog(false)}
        fullWidth={true}
        open={openDialog}
        children={<AddUsersFrom closeDialog={() => setOpenDialog(false)} />}
      ></Dialog>
      <div style={{ height: "4em", allingItems: "center" }}>
        <input
          type="button"
          value="Add User"
          onClick={() => setOpenDialog(true)}
        />
      </div>
      <div>
        <UsersListing users={users} />
      </div>
    </div>
  );
}
