import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card"
import StripeCheckout from "react-stripe-checkout"


function Merch() {
    // setting the components initial state
    const [merch, setMerch] = useState([])

    // load all the merch and store it with setMerch
    useEffect(() => {
        loadMerch()
    }, [])

    // load all the merch and set ot tp merch
    function loadMerch() {
        API.getMerch().then(result => {
            console.log(result)
            setMerch(result.data)
        })
            .catch(err => console.log(err))
    }

    function handleToken(token, address) {
        console.log({token, address})
    }

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    {merch.map(merchItem => {
                        return <Card
                            name={merchItem.name}
                            imageURL={merchItem.imageURL}
                            description={merchItem.description}
                            price={merchItem.price} />
                    })}
                    {/* <StripeCheckout
                        stripeKey="pk_test_51HHANJFue8AESN72niotX1hYwFjzQEULjjHTD5Js6iFso2W1H5iSI58scGE8j8l5oJdhz0CrmQSbVXbbuhxReXTn001Y8TMpkc"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amount={merchItem.price * 100}
                        name={merchItem.name}
                    /> */}
            </Col>
        </Row>
    </Container>
)

}
export default Merch;