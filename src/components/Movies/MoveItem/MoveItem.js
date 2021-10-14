import React from "react";
import { CircularProgress } from "@material-ui/core";
export const MoveItem = ({title,id,history, poster_path,release_date,vote_average}) => {
    const vote = vote_average * 10;
    return (
        <>
            <li  className="block-card" onClick={()=> history.push(`/${id}`)}>
                <div className="image">
                    <div className="progress">
                        <p className="vote">{vote_average}</p>
                        <CircularProgress  variant="determinate" color="primary" value={vote}/>
                    </div>
                    
                    <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title}/>
                </div>
                <div className="title">
                    <h2 className="item-title">{title}</h2>
                    <p>{release_date}</p>
                </div>
                </li>
        </>
    )
}