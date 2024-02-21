import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootApi";
import { ToastContainer, toast } from "react-toastify";

const AddLearn = () => {
  const [learns, setlearns] = useState({});
  //form handler function
  const handleForm = (e) => {
    
    postDataToServer(learns);
    setlearns({
      id: "",
      name: "",
      details: "",
    });
    e.preventDefault();
  };

  //createing function to post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/learns`, data).then(
      (response) => {
        
        toast.success("New course added succesfully", {
          position: "top-center",
        });
       
      },
      (error) => {
        
        
      }
    );
  };

  return (
    <Container>
      <ToastContainer />
      <h4 className="text-center my-5">Fill the Course details:</h4>
      <Form onSubmit={handleForm} className="text-center">
        <FormGroup floating>
          <Input
            onChange={(e) => {
              setlearns({ ...learns, id: e.target.value });
            }}
            id="id"
            name="id"
            placeholder="id"
            value={learns.id}
          />
          <Label for="id">Course Id</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            onChange={(e) => {
              setlearns({ ...learns, name: e.target.value });
            }}
            id="name"
            name="name"
            placeholder="name"
            value={learns.name}
          />
          <Label for="name">Name</Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            onChange={(e) => {
              setlearns({ ...learns, details: e.target.value });
            }}
            id="detail"
            name="detail"
            placeholder="detail"
            value={learns.details}
            type="textarea"
            style={{ height: 100 }}
          />
          <Label for="detail">Detail</Label>
        </FormGroup>

        <Button type="submit" className="mx-2" color="success">
          Add Course
        </Button>
        <Button
          onClick={() => {
            setlearns({
              id: "",
              name: "",
              details: "",
            });
          }}
          color="secondary"
        >
          Reset
        </Button>
      </Form>
    </Container>
  );
};

export default AddLearn;
