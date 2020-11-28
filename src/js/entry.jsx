import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.scss';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentItem: {
                text: ''
            }
        }
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    // add function takes one arg, the todo, and adds it to the end of the list
    addTodo() {
        event.preventDefault();
        const value = this.state.currentItem.text;
        if (value.length > 0) {
            this.setState({
                list: [...this.state.list, value]
            })
        }
    }
    handleChange(e) {
        this.setState({
            currentItem: {
                text: e.target.value
            }
        })
    }

    render() {
        return (
           <>
                <Navbar bg="primary" className="justify-content-center">
                    <Navbar.Brand>
                        <h1>Todo</h1>
                    </Navbar.Brand>
                </Navbar>

                <Container>
                    {this.state.list.map(elem => {
                        return <p>{elem}</p>
                    })}

                    <Form onSubmit={this.addTodo}>
                        <Form.Group controlId="formBasic">
                            <Form.Label>New Todo:</Form.Label>
                            <Form.Control type="text" value={this.state.currentItem.text} onChange={this.handleChange} />
                            <Button variant="primary" type="submit" >Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </>
        )   
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));