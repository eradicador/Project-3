import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card"



function Merch() {
    // setting the components initial state
    const [merch, setMerch] = useState([])

    // load all the merch and store it with setMerch
    useEffect(() => {
        loadMerch()
    }, [])

    // load all the merch and set ot tp merch
    function loadMerch() {
        API.getMerch().then(result => setMerch(result.data))
        .catch(err => console.log(err))
    }


return (
    <Container fluid>
        <Row>
            <Col size="md-6">
                {merch.map(merchItem => {
                    return <Card 
                    name = {merchItem.name}
                    imageURL = {merchItem.imageURL}
                    description = {merchItem.description}
                    price ={merchItem.price}/>
                })}
                 
                
            </Col>
        </Row>
    </Container>
)

}
export default Merch;