import { Link } from "react-router-dom";

import styled from "styled-components";

import CloseIcon from "@material-ui/icons/CancelSharp";
import DotIcon from "@material-ui/icons/FiberManualRecordSharp";

const InfoBar = ({ chatRoom }) => {
    return (
        <InfoBarStyled>
            <div className="container">
                <div className="chatRoom">
                    <DotIcon className="online" />
                    <p>{chatRoom}</p>
                </div>
                <Link className="noLink" to={`/`}>
                    <CloseIcon />
                </Link>
            </div>
        </InfoBarStyled>
    );
};

export default InfoBar;

const InfoBarStyled = styled.div`
    display: flex;
    width: 100%;
    color: #fff;
    background-color: #1976cf;
    justify-content: center;

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5em 1em;
        max-width: 24em;
        width: 100%;

        .chatRoom {
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            align-items: center;
        }
        .noLink {
            height: 1.5em;
        }
    }

    h3 {
        text-transform: uppercase;
    }
    .online {
        font-size: 0.8rem;
        color: #99ef9a;
        margin-right: 0.5em;
    }
    .offline {
        margin-right: 0.5em;
        color: #ef999a;
    }
`;
