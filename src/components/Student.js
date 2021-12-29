import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Container, Paper } from "@mui/material";
import { useState, useEffect } from "react";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(student),
    })
      .then(() => {
        console.log("new student added from frontend");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/all")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u> Add Student</u>
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Student Address"
            variant="filled"
            fullWidth
            value={address}
            onChange={(e) => setAdress(e.target.value)}
          />
        </Box>
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Submit
        </Button>
      </Paper>
      <Paper elevation={3} style={paperStyle}>
        {students.map((stu) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={stu.id}
          >
            ID:{stu.id}
            <br />
            Name:{stu.name}
            <br />
            Address:{stu.address}
            <br />
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
