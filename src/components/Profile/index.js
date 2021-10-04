import React from 'react';  

export const Profile = (props) => {
    return (
      <>
        <div className="profile">
            <div className="description">
                <div className="avatar">
                  <img  className="avatar-profile" src={props.avatar} alt="avatar"/>
                </div>
                <p className="name">{props.name}</p>
                <p className="tag">@{props.tag}</p>
                <p className="location">{props.location}</p>
            </div>
            
            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{props.stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{props.stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{props.stats.likes}</span>
                </li>
            </ul>
        </div>
    </>
    )
  }

  Profile.defaultProps = {
    avatar: "https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png",
  };
