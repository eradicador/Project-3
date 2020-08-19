import React, { useEffect, useState } from "react";
import { Header, Message } from "semantic-ui-react";
import ReactPlayer from "react-player";
// import Card from "react-bootstrap/Card";
import { CardDeck } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/VideoCard"


// export const Videos = () => {

function Video() {
    // setting the components initial state
    const [video, setVideo] = useState([])

    // load all the merch and store it with setVideo
    useEffect(() => {
        loadVideo()
    }, [])

    // load all the video and set ot tp video
    function loadVideo() {
        API.getVideo().then(result => {
            console.log(result)
            setVideo(result.data)
        })
            .catch(err => console.log(err))
    }

    function handleToken(token, address) {
        console.log({ token, address })
    }


    return (
        <Container fluid>
            <Row>
                <Col size="md-4">
                    {video.map(videoItem => {
                        return <Card
                            title={videoItem.name}
                            videoURL={videoItem.imageURL}
                            description={videoItem.description}
                            price={videoItem.price} />
                    })}
                    
                </Col>
            </Row>
        </Container>






        // <div>
        //     <Message className="message-container" size="huge" secondary="true">
        //         <Header size="huge"> Tutorial Videos </Header>
        //         <p></p>
        //     </Message>

        //     <CardDeck>
        //         <Card className="">
        //             <ReactPlayer
        //                 url="https://youtu.be/32oHIYU4pk8/"
        //                 fluid={false}
        //                 width="100%"
        //                 height={360}
        //             />
        //             <Card.Body className="text-center">
        //                 <Card.Title>1st Tutorial</Card.Title>
        //                 <Card.Text>

        //                 </Card.Text>
        //             </Card.Body>
        //             {/* <Card.Footer>
        //                 <small className="text-muted"></small>
        //             </Card.Footer> */}
        //         </Card>
        //         <Card>
        //             <ReactPlayer
        //                 url="https://youtu.be/JmwIUBGBb9I"
        //                 fluid={false}
        //                 width="100%"
        //                 height={360}
        //             />
        //             <Card.Body className="text-center">
        //                 <Card.Title>2nd Tutorial</Card.Title>
        //                 <Card.Text>
        //                     {' '}
        //                 </Card.Text>
        //             </Card.Body>
        //             {/* <Card.Footer>
        //                 <small className="text-muted"></small>
        //             </Card.Footer> */}
        //         </Card>
        //         <Card>
        //             <ReactPlayer
        //                 url="https://youtu.be/CMQp0bwjokw"
        //                 fluid={false}
        //                 width="100%"
        //                 height={360}
        //             />
        //             <Card.Body className="text-center">
        //                 <Card.Title>3rd Tutorial</Card.Title>
        //                 <Card.Text>

        //                 </Card.Text>
        //             </Card.Body>
        //             {/* <Card.Footer>
        //                 <small className="text-muted"></small>
        //             </Card.Footer> */}
        //         </Card>
        //     </CardDeck >
        // </div>

    )

}

export default Video;
