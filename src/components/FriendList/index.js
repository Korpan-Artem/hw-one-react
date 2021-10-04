 import React from 'react';
 import './styles.css';
 import styled from 'styled-components';


 
 const FriendItem = ({isOnline, name,avatar}) => {
    const SpanIsOnline = styled.span`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: ${isOnline ? 'green' : 'red'};
    `;
    return (
        <>
        <div className="block">
            <SpanIsOnline></SpanIsOnline>
            <div className="avatar-friend">
                <img  className="avatar-img-friend" src={avatar} alt="Avatar"/>
            </div>
            <div className="name">
                <h3>{name}</h3>
            </div>
        </div>
            
        </>
    )
 }
 export const FriendList = ({friends}) => {
     const lisJSX =friends.map(({id, isOnline, name,avatar}) => <FriendItem key={id} isOnline={isOnline} name={name} avatar={avatar}></FriendItem>);
     return <>{lisJSX}</>
 }