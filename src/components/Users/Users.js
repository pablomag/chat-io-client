import styled from "styled-components";

const Users = ({ users }) => {
    return (
        <UsersListStyled>
            <h5>Online users</h5>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </UsersListStyled>
    );
};

export default Users;

const UsersListStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 14em;
    margin: 0 1em;
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 0.15rem solid #1976cf;
    background-color: #fff;

    h5 {
        line-height: 1.35em;
        padding: 0.25em 1em;
        box-sizing: default;
        border: 0.2rem solid #333;
        color: #fff;
        background-color: #333;
    }
    ul {
        margin: 0.75em 1.25em;
    }
    li {
        list-style: none;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 1.5em;

        &::before {
            content: "";
            display: inline-flex;
            flex-direction: row;
            width: 0.5em;
            height: 0.55em;
            margin-right: 0.5em;
            border-radius: 1em;
            background-color: #99ef9a;
        }
    }
`;
