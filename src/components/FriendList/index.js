
import React from 'react';
import { FriendItem } from '../FriendItem'

 export const FriendList = ({friends}) => {
    const lisJSX =friends.map(({id, isOnline, name,avatar}) => <FriendItem key={id} isOnline={isOnline} name={name} avatar={avatar}></FriendItem>);
    return (
        <>{lisJSX}</>
    )
 }