import React from 'react';
import { Header, Message } from "semantic-ui-react";
import ReactPlayer from "react-player";
import Card from "react-bootstrap/Card";
import { CardDeck } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";



export const Videos = () => {
    return (
        <div>
            <Message className="message-container" size="huge" secondary="true">
                <Header size="huge"> Tutorial Videos </Header>
                <p>This is a Protected Route</p>
            </Message>

            <CardDeck>
                <Card>
                    <ReactPlayer
                        url="https://youtu.be/32oHIYU4pk8/"
                        fluid={false}
                        width={490}
                        height={360}
                    />
                    <Card.Body>
                        <Card.Title>1st Tutorial</Card.Title>
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
                    <ReactPlayer
                        url="https://youtu.be/JmwIUBGBb9I"
                        fluid={false}
                        width={490}
                        height={360}
                    />
                    <Card.Body>
                        <Card.Title>2nd Tutorial</Card.Title>
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
                    <ReactPlayer
                        url="https://youtu.be/CMQp0bwjokw"
                        fluid={false}
                        width={490}
                        height={360}
                    />
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
            </CardDeck >
        </div>

    )

}

export default Videos;
