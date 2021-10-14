import React, { useEffect, useState } from "react";
import { fetchMoviesDetails } from "../../../api";
import { CircularProgress } from "@material-ui/core";
export const MoveDetails = ({match}) => {
    const moveId = match.params.id;

    const [move,setMove] = useState({}); 

    useEffect(() => {
        if(moveId) {
            fetchMoviesDetails(moveId).then((res) => setMove(res));
        }
    },[moveId])
    const vote = move.vote_average * 10;
    console.log('move',move);
    return (
        <>
            <div className="container-details">
                <div className="image-detail">
                    <img src={`https://image.tmdb.org/t/p/w300/${move.poster_path}`} alt={move.title}/> 
                </div>
                <div className="block-details">
                    <h2>{move.title}</h2>
                    <p>{move.release_date}</p>
                    <div className="progress-details">
                        <p className="vote">{move.vote_average}</p>
                        <CircularProgress  variant="determinate" color="primary" value={vote}/>
                    </div>
                    <h3>Overview</h3>
                    {move && move.overview && <p>{move.overview}</p>}
                </div>
            </div>
           
        </>
    )
}