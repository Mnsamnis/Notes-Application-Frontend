import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AllLearns from "./components/AllLearns";
import { Row, Container, Col } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import AddLearn from "./components/AddLearn";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import UpdateLearn from "./components/UpdateLearn";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container className="relative" style={{ width: 1000 }}>
        <Row>
          <Col md={4} className="mx-auto my-5 text-center absolute">
            <Menu />
          </Col>
          <Col md={8} className="absolute">
            <Routes>
              <Route path="/" element={<Home />} exact />

              <Route path="/add-learn" element={<AddLearn />} exact />

              <Route
                path="/all-learns"
                element={<AllLearns title="View" />}
                exact
              />
              <Route
                path="/update-learn"
                element={<AllLearns title="Update" />}
                exact
                title="Update"
              />
              <Route
                path="/delete-learn"
                title="Delete"
                element={<AllLearns title="Delete" />}
                exact
              />
             <Route
                path={`/updating-learn/:learnId`}
                title="Updating"
                element={<UpdateLearn />}
                exact
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
