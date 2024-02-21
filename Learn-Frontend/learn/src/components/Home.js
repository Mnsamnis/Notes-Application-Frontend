import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardTitle, Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Card color="light"
        body
        className="mx-auto my-5 text-center absolute"
      >
        <CardTitle className="mb-3" tag="h5">
          Welcome to Learning Application
        </CardTitle>
        <CardText>
          This website is created just for learning purpose. We have used JAVA,
          Spring Boot, React and various technology just for learning thing. Once
          we learn these thing frontend and backed then we will create new
          application by own.
        </CardText>
        <Link to='/add-learn'>
        <Button className="col-5 mx-auto mt-4" color="info" outline>
          Click Here to open the application
        </Button>
        </Link>
      </Card>
    </div>
  );
};

export default Home;
