import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/"
        action="true"
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add-learn"
        action="true"
      >
        Add Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/all-learns"
        action="true"
      >
        View Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/update-learn"
        action="true"
      >
        Update Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/delete-learn"
        action="true"
      >
        Delete Course
      </Link>
    </ListGroup>
  );
};

export default Menu;
