import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import styled from "styled-components";

import InfoBar from "../InfoBar/InfoBar";
import InputMessage from "../InputMessage/InputMessage";
import Messages from "../Messages/Messages";
import Users from "../Users/Users";

const ENDPOINT = "localhost:5000";
const socket = io(ENDPOINT);

const Chat = ({ location }) => {
    const [name, setName] = useState();
    const [chatRoom, setChatRoom] = useState();
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    const updateMessages = (message) => {
        setMessages((messages) => [...messages, message]);
    };
    const updateUsers = (users) => {
        setUsers(users);
    };
    const userDisconnect = () => {
        console.log("disconnect");
        socket.emit("userDisconnect");
        socket.off();
    };
    window.onbeforeunload = () => userDisconnect();

    useEffect(() => {
        const { name, chatRoom } = queryString.parse(location.search);

        setName(name);
        setChatRoom(chatRoom);

        if (name && chatRoom) {
            socket.emit("join", { name, chatRoom }, () => {});
        }
        console.log("render");
        return () => userDisconnect();
    }, [location.search]);
    useEffect(() => {
        socket.on("message", (message) => {
            updateMessages(message);
        });
    }, []);
    useEffect(() => {
        socket.on("chatRoomDetails", (users) => {
            updateUsers(users);
        });
    }, []);

    return (
        <ContainerStyled>
            <div className="row">
                <InfoBar chatRoom={chatRoom} />
                <Messages messages={messages} loggedInUser={name} />
                <InputMessage socket={socket} />
            </div>
            <div className="row">
                <Users users={users} />
            </div>
        </ContainerStyled>
    );
};

export default Chat;

const ContainerStyled = styled.div`
    display: flex;
    flex-direction: row;

    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 24em;
        min-height: 100%;
    }
    .heading {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        text-transform: uppercase;
    }
`;
