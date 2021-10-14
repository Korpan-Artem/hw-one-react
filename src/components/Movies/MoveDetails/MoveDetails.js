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
            <div 
                className="container-details" 
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${move.backdrop_path})`,  
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '80%',
                height: '80%'}}
            >
                <div className="blur"></div>
                <div className="image-block">
                    <img className="image-detail" src={`https://image.tmdb.org/t/p/w300/${move.poster_path}`} alt={move.title}/> 
                </div>
                <div className="block-details">
                    <h2>{move.title}</h2>
                    <p className="date-details">{move.release_date}</p>
                    <div className="">
                        <p className="vote-details">{vote}%</p>
                        <CircularProgress className="progress-details"  variant="determinate" color="primary" value={vote}/>
                       
                    </div>
                    <span className="user-score">User Score</span>
                    <h3>Overview</h3>
                    {move && move.overview && <p className="overview-details">{move.overview}</p>}
                </div>
            </div>
           
        </>
    )
}