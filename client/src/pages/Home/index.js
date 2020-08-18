import React from 'react'
import { Header, Message, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import noBGbw from "../images/noBGb&w.png"

export const Home = () => {
    // access to the isAuthenticated property from the auth reducer state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const showLoginBtn = () => {
        if (!isAuthenticated) {
            return (
                // <Button color="black" animated secondary>
                //     <Button.Content visible>Login</Button.Content>
                //     <Button.Content hidden>
                //         <Icon name='arrow right' />
                //     </Button.Content>
                // </Button>
                <div></div>
            )
        }
    }

    return (
        
        <div>
           <div className="container center">
                <img style={{ justifyContent: "center" }} src={noBGbw} alt="black logo"></img>
                <Message className="message-container" size="huge" secondary="true">
                <p style={{ marginBottom: "5px" }}>This is a website for all the dream chasers out there .</p>
                <p style={{ margin: "5px 0 25px" }}>My name is Jason Bunch Im a professional trainer and a middle school teacher, this website is for all the people that want to chase a dream.</p>
                <Link to="/login">
                    {showLoginBtn()}
                </Link>
            </Message>
        </div>
        </div>
    )
};

export default Home;
