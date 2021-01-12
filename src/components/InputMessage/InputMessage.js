import { useState } from "react";

import styled from "styled-components";
import Input from "@material-ui/core/Input";
import SendIcon from "@material-ui/icons/Send";

const DEFAULT_MESSAGE = "Type a message...";

const InputMessage = ({ socket }) => {
    const [message, setMessage] = useState(DEFAULT_MESSAGE);
    const sendMessage = () => {
        if (message) {
            socket.emit("sendMessage", message, () => {
                setMessage("");
            });
        }
    };

    return (
        <InputMessageStyled>
            <Input
                className="inputField"
                value={message}
                inputProps={{
                    "aria-label": "description",
                }}
                onChange={(event) => setMessage(event.target.value)}
                onFocus={(event) =>
                    event.target.value === DEFAULT_MESSAGE
                        ? setMessage("")
                        : null
                }
                onBlur={(event) =>
                    event.target.value === ""
                        ? setMessage(DEFAULT_MESSAGE)
                        : null
                }
                onKeyPress={(event) =>
                    event.key === "Enter" ? sendMessage() : null
                }
            />
            <SendIcon className="sendIcon" onClick={() => sendMessage()} />
        </InputMessageStyled>
    );
};

export default InputMessage;

const InputMessageStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 20em;
    padding: 0.25em 0.5em;

    .inputField {
        display: flex;
        width: 100%;
        margin-right: 0.5em;
    }
    .sendIcon {
        cursor: pointer;
        &:hover {
            color: #1976cf;
        }
        &:active {
            color: #333;
        }
    }
`;
