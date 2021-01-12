import ScrollToBottom from "../Util/scrollToBottom";
import Message from "../Message/Message";

import styled from "styled-components";

const USER_BACKGROUND = "raindrops.jpg";

const Messages = ({ messages, loggedInUser }) => {
    return (
        <MessagesStyled>
            <div className="container">
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        message={message}
                        loggedInUser={loggedInUser}
                    />
                ))}
                <ScrollToBottom />
            </div>
        </MessagesStyled>
    );
};

export default Messages;

const MessagesStyled = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 30em;
    justify-content: center;

    .container {
        display: flex;
        flex-direction: column;
        padding: 0.5em 1em;
        max-width: 24em;
        width: 100%;
        overflow: auto;
    }
    &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.5;
        background-image: url("./images/${USER_BACKGROUND}");
        background-position: center center;
        background-size: cover;
    }
`;
