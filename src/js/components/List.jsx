import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';


export default class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h3 id="title">{this.props.title}</h3>
                {this.props.list.map(todo => {
                    if (title === "Todo") {
                        return (
                            <Card key={todo.key} className="my-3">
                                <Card.Body>
                                    <p>{todo.text}</p>
                                    <Button className="disabled" variant="outline-danger" onClick={ () => this.props.deleteTodo(todo.key, false)}>Delete</Button> 
                                    <Button variant="success" onClick={ () => this.props.updateTodo(todo.key)}>Complete</Button>  
                                </Card.Body>
                            </Card>
                        )
                    } else {
                        return (
                            <Card key={todo.key} className="my-3">
                                <Card.Body>
                                    <p>{todo.text}</p>
                                    <Button variant="danger" onClick={ () => this.props.deleteTodo(todo.key)}>Delete</Button> 
                                    <Button  variant="success" onClick={ () => this.props.updateTodo(todo.key)}>Complete</Button>  
                                </Card.Body>
                            </Card>
                        )
                    }

                    
                })}
            </>

        )
    }
}