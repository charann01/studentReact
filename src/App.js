import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateStudent from './components/studentc.component'
import StudentList from './components/studentl.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/studentc'} className="nav-link">
                 StuCrud
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/studentc'} className="nav-link">
                    Form
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/studentl'} className="nav-link">
                    List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="/studentc"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                  exact
                  path="/studentl"
                  component={(props) => <StudentList {...props} />}
                /> 
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
