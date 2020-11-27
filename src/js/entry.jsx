import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.scss';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2 , 4]
        }
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
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>New Todo:</Form.Label>
                            <Form.Control type="text" placeholder="Enter todo" />
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                </Container>
            </>
        )   
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));