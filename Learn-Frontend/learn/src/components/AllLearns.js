import React, { useState, useEffect } from "react";
import Learn from "./Learn";
import base_url from "./../api/bootApi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllLearns = (props) => {
  const [learns, setlearns] = useState([]);

  //function to load server
  const getAllLearnsfromServer = () => {
    axios.get(`${base_url}/learns`).then(
      (response) => {
        
        toast.success("courses has been loaded", {
          position: "bottom-left",
        });
        setlearns(response.data);
      },
      (error) => {
        
        toast.error("Something went wrong");
      }
    );
  };

  const deletingLearn = (id) => {
    setlearns(learns.filter((c) => c.id !== id));
  };

  const updatingLearn= (id)=>{
    getAllLearnsfromServer();
  }

  //calling loading learn funstion
  useEffect(() => {
    getAllLearnsfromServer();
  }, []);

  return (
    <div className="my-5 text-center">
      <ToastContainer />
      <h1>{props.title} Courses</h1>
      <p>List of the courses are as follow</p>
      {learns.length > 0
        ? learns.map((item) => <Learn key={item.id} learn={item} deleted={deletingLearn} updated={updatingLearn} />)
        : "No Course"}
    </div>
  );
};

export default AllLearns;
