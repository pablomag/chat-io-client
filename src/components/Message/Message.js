import { Twemoji as Emoji } from "react-emoji-render";

import styled from "styled-components";

const CHAT_FONT_SIZE = "0.9rem";
const ADMIN_USER = "Admin";

const Message = ({ message, loggedInUser }) => {
    const isOwnMessage = message.user === loggedInUser;
    const isAdminMessage = message.user === ADMIN_USER;

    if (isAdminMessage) {
        return (
            <AdminMessageStyled>
                <Emoji className="emoji" text={message.text} />
            </AdminMessageStyled>
        );
    }

    return isOwnMessage ? (
        <UserMessageStyled>
            <Emoji className="emoji" text={message.text} />
        </UserMessageStyled>
    ) : (
        <OtherUsersMessageStyled>
            <span className="user">{message.user}</span>
            <Emoji className="emoji" text={message.text} />
        </OtherUsersMessageStyled>
    );
};

export default Message;

const MessageStyled = styled.div`
    display: flex;
    width: 18em;
    .emoji {
        font-size: ${CHAT_FONT_SIZE};
        border-radius: 1em;
        margin: 0.5em 0;
        padding: 0.5em 1.25em;
        max-width: 15em;

        img {
            width: 1.3rem !important;
            height: 1.3rem !important;
            vertical-align: text-bottom;
        }
    }
    .user {
        display: flex;
        align-items: center;
        margin-right: 0.5em;
        font-size: 0.7rem;
        font-weight: 600;
        color: #333;
    }
`;
const AdminMessageStyled = styled(MessageStyled)`
    justify-content: center;
    .emoji {
        max-width: 20em;
        flex-grow: 1;
        color: #fff;
        background-color: #333;
    }
`;
const UserMessageStyled = styled(MessageStyled)`
    justify-content: flex-end;
    .emoji {
        color: #fff;
        background-color: #1976cf;
    }
`;
const OtherUsersMessageStyled = styled(MessageStyled)`
    justify-content: flex-start;
    .emoji {
        background-color: #eee;
    }
`;
