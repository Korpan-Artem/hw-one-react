import React from "react";
import LayoutStyle from "./LayoutStyle";

export const FriendItem = ({isOnline, name,avatar}) => {
    return (
        <>
        <div className="block">
            <LayoutStyle theme={isOnline}></LayoutStyle>
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

 export default FriendItem;

