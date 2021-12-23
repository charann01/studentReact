import React , {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class CreateStudent extends Component
{
    constructor(props)
    {
     super(props)
     this.OnChangeStudentName = this.OnChangeStudentName.bind(this);
     this.OnChangeStudentRollNo = this.OnChangeStudentRollNo.bind(this);
     this.OnChangeStudentBranch = this.OnChangeStudentBranch.bind(this);
     this.Onsubmit = this.Onsubmit.bind(this);

     this.state = {
         name:'',
         rollno:'',
         branch:''
     }
    }
    OnChangeStudentBranch(e)
    {
        this.setState({branch: e.target.value})
    }
    OnChangeStudentRollNo(e)
    {
        this.setState({rollno:e.target.value})
    }
    OnChangeStudentName(e)
    {
        this.setState({name:e.target.value})
    }
    Onsubmit(e)
    {
        const studentobj={
            name:this.state.name,
            rollno:this.state.rollno,
            branch:this.state.branch
        };
        axios.post('http://localhost:3000/stucrud/studentc',studentobj)
         .then(res => console.log(res.data));
        
        this.setState({name:'',rollno:'',branch:''})
    }
    render()
    {
        return(
            <div className="form-wrapper">
            <Form onSubmit={this.Onsubmit}>
            <Form.Group controlId="RollNo">
            <Form.Label>Roll No</Form.Label>
            <Form.Control type="text" value={this.state.rollno} onChange={this.OnChangeStudentRollNo}>
            </Form.Control>
            </Form.Group>

            <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.OnChangeStudentName}>
            </Form.Control>
            </Form.Group>

            <Form.Group controlId="Branch">
            <Form.Label>Branch</Form.Label>
            <Form.Control type="text" value={this.state.branch} onChange={this.OnChangeStudentBranch}>
            </Form.Control>
            </Form.Group>

            <br></br>
            <Button>Create Student</Button>

            </Form>
            </div>
        )
    }
}