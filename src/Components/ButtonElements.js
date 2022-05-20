import styled from 'styled-components'

import {Link} from 'react-scroll'

export const Button = styled.a`
    background: ${({primary}) => (primary ? '#FDB3CA' : '#FDB3CA')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#000' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    border-radius: 150px;

    &: hover{
        transition: all 0.2s ease-in-out;
        color: #fff;
        background: ${({primary}) => (primary ? '#A691DB' : '#A691DB')};
    }
`