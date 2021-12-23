import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentBranch = this.onChangeStudentBranch.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollNo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      branch: '',
      rollno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:300/stucrud/studente/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          branch: res.data.branch,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentBranch(e) {
    this.setState({ branch: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      branch: this.state.branch,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:4000/stucrud/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/studentl')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Branch">
          <Form.Label>Branch</Form.Label>
          <Form.Control type="email" value={this.state.Branch} onChange={this.onChangeStudentBranch} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}