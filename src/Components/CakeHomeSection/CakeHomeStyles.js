import styled from 'styled-components'


export const Button = styled.a`
    background: ${({primary}) => (primary ? '#FDB3CA' : '#591c29')};
    white-space: nowrap;
    width: 150px;
    margin: 0 auto;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Khula', sans-serif;
    font-weight: 600;
    transition: all 0.5 ease-in-out;
    padding: 10px 0px;
    display: block;
    text-align: center;

    &: hover{
        transition: all 0.5s ease-in-out;
        color: #591c29;
        background: ${({primary}) => (primary ? '#A691DB' : '#fff')};
    }
`