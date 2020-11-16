import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddUsersFrom({ closeDialog }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8000/users", {
        FirstName: data.FirstName,
        LastName: data.LastName,
        Instructor: data.Instructor,
      })
      .then((res) => {
        console.log(res.data);
      })
      .then(closeDialog());
  };

  const inputStyle = {
    display: "block",
    margin: "0 auto",
    height: "36px",
    width: "70%",
    marginTop: "2em",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        style={inputStyle}
        type="text"
        placeholder="First Name"
        name="FirstName"
        ref={register}
        required
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="Last Name"
        name="LastName"
        ref={register}
        required
      />
      <label
        style={{
          display: "block",
          width: "70%",
          margin: "2em 0 3em 0",
        }}
      >
        <input
          type="checkbox"
          placeholder="Instructor"
          name="Instructor"
          ref={register}
          style={{
            margin: "0 auto",
          }}
        />
        <p>Is Instructor?</p>
      </label>

      <input
        type="submit"
        style={{
          display: "block",
          margin: "0  auto",
          width: "70%",
          marginBottom: "2em",
        }}
      />
    </form>
  );
}
