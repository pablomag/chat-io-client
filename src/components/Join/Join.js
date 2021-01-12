import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Join = () => {
    const [name, setName] = useState();
    const [chatRoom, setChatRoom] = useState();

    return (
        <ContainerStyled>
            <h1 className="heading">Join</h1>
            <TextFieldStyled>
                <TextField
                    label="Name"
                    variant="outlined"
                    className="joinInput"
                    type="text"
                    onChange={(event) => setName(event.target.value)}
                />
            </TextFieldStyled>
            <TextFieldStyled>
                <TextField
                    label="Chat room"
                    variant="outlined"
                    className="joinInput"
                    type="text"
                    onChange={(event) => setChatRoom(event.target.value)}
                />
            </TextFieldStyled>
            <ButtonStyled>
                <Link
                    className="noLink"
                    onClick={(event) =>
                        !name || !chatRoom ? event.preventDefault() : null
                    }
                    to={`/chat?name=${name}&chatRoom=${chatRoom}`}
                >
                    <Button type="submit" variant="contained" color="primary">
                        Sign in
                    </Button>
                </Link>
            </ButtonStyled>
        </ContainerStyled>
    );
};

export default Join;

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .heading {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        text-transform: uppercase;
    }
`;
const ButtonStyled = styled.div`
    .noLink {
        text-decoration: none;
    }
    button {
        width: 22.8em;
    }
`;
const TextFieldStyled = styled.div`
    .joinInput {
        width: 20em;
        padding: 0 0 1em;
    }
`;
