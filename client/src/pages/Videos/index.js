import React from 'react';
import { Header, Message } from "semantic-ui-react";
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'



export const Videos = () => {
    return (
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Tutorial Videos </Header>
                <p>This is a Protected Route</p>
            </Message>
            <div>
                <ReactPlayer
                    url="https://youtu.be/32oHIYU4pk8"
                />
                <div>
                    <ReactPlayer
                        url="https://youtu.be/JmwIUBGBb9I"
                    />
                </div>
            </div>
        </div>
    )
        < CardGroup >
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
              content.{' '}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        </CardGroup >
    
}

export default Videos;
