import React from 'react'
import ReactDOM from 'react-dom'
import { Container, Navbar, Form, Button } from 'react-bootstrap';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.scss';


function Item(_text, _key) {
    this.text = _text;
    this.key = _key;        
}
class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    
    // add function takes one arg, the todo, and adds it to the end of the list
    addTodo() {
        event.preventDefault();
        const item = new Item(this.state.currentItem.text, this.state.currentItem.key)
        if (item.text != '') {
            this.setState({
                list: [...this.state.list, item],
                currentItem: {
                    text: '',
                    key: ''
                }
            })
        }
    }

    // edit todo. uses the todo key to grab the object, change the state.text, reset the state of the object with a new value
    updateTodo(key) {
        const item = this.state.list.filter(item => item.key == key);
        console.log(item);
    }

    handleChange(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    deleteTodo(key) {
        const newList = this.state.list.filter(item => item.key != key);
        this.setState({
            list: newList
        })
    }
 
    render() {
        return (
           <>
                <Navbar bg="primary" className="justify-content-center">
                    <Navbar.Brand>
                        <h2>Todo</h2>
                    </Navbar.Brand>
                </Navbar>

                <Container>
                    {/*
                        this is the space for the todos to be shown 
                        <List list={this.state.list} />
                    */}
                    <List list={this.state.list} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}/>

                    <Form onSubmit={this.addTodo} className="my-2">
                        <Form.Group controlId="formBasic">
                            <Form.Label>New Todo:</Form.Label>
                            <Form.Control type="text" value={this.state.currentItem.text} onChange={this.handleChange} />
                            <Button variant="primary" type="submit">Submit</Button>
                            
                        </Form.Group>
                    </Form>
                </Container>
            </>
        )   
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));