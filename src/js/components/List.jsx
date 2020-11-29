import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';


export default class List extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {this.props.list.map(todo => {
                    return (
                        <Card key={todo.key} className="my-3">
                            <Card.Body>{todo.text}</Card.Body>
                            <Button variant="danger" onClick={ () => props.deleteTodo(todo.key)}> Delete </Button>
                        </Card>
                    )
                })}
            </>

        )
    }
}