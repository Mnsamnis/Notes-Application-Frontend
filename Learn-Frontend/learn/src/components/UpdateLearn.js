import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootApi";
import { toast } from "react-toastify";



const UpdateLearn = ({update,clicked,updated}) => {
    const [click, setClick] = useState(clicked);
    const [learns,setlearns]=useState({
        id:update.id,
        name:update.name,
        details:update.details
    });

    // setlearns(update);

   
   
    
    const handleForm=(e)=>{
       
       
       putDataToServer(learns)

        e.preventDefault();
    }

const putDataToServer=(data)=>{
    axios.put(`${base_url}/learns`,data).then((response)=>{
        
        updated(update.id);
        toast.success("Course has been updated Successfully")
        setClick(!click)
    },
    (error)=>{
        
    })
}

    
  return (click?
    <Container>
      <h4 className="text-center my-5">Update the Course:</h4>
      <Form onSubmit={handleForm} className="text-center">
        <FormGroup floating>
          <Input
            id="id"
            onChange={(e) => {
                setlearns({ ...learns, name: e.target.value });
              }}
            name="id"
            placeholder="id"
            value={update.id}
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
            
            defaultValue={update.name}
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
            defaultValue={update.details}
            type="textarea"
            style={{ height: 100 }}
          />
          <Label for="detail">Detail</Label>
        </FormGroup>

        <Button  type="submit" className="mx-2" color="success">
          Update Course
        </Button>
    
      </Form>
    </Container>:""
  );
};

export default UpdateLearn;
