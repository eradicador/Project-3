import React from 'react';
import { Header, Message } from "semantic-ui-react";
import ReactPlayer from "react-player"


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
}

export default Videos;
