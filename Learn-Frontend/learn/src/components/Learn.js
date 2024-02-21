import React, { useState } from "react";
import {
  Card,
  CardText,
  CardTitle,
  Button,
  Container,
  CardBody,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootApi";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import UpdateLearn from "./UpdateLearn";

const Learn = ({ learn, deleted, updated}) => {
  const [clicked, setClicked] = useState(false);

  const updateLearns = (id) => {
    setClicked(!clicked);
    
  };

  const deleteLearn = (id) => {
    axios.delete(`${base_url}/learns/${id}`).then(
      (response) => {
        
        toast.success("Course Deleted !!");
        deleted(id);
      },
      (error) => {
        toast.error("Something went wrong !!");
       
      }
    );
  };

  return (
    <Card className="text-center my-2">
      <CardBody>
        <CardTitle tag="h6">{learn.name}</CardTitle>
        <CardText>{learn.details}</CardText>
        <Container className="text-center">
          <Button
            className="mx-2"
            color="danger"
            onClick={() => {
              deleteLearn(learn.id);
            }}
          >
            Delete
          </Button>

          <Button
            onClick={() => {
              updateLearns(learn.id);
            }}
            color="warning"
          >
            Update
          </Button>

          {clicked ? (<UpdateLearn key={learn.id} update={learn} clicked={clicked} updated={updated} />) : ""}
        </Container>
      </CardBody>
    </Card>
  );
};

export default Learn;
