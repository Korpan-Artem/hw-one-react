import React, { useEffect, useState } from "react";
import { getTrending } from '../../../api';
import { MoveItem } from "../MoveItem/MoveItem";

export const MoveList = ({history}) => {
    const [response,setResponse] = useState([]);
    useEffect (() => {
        getTrending().then((data) => setResponse(data));
    },[]);
    console.log(response);
    return (
        <ul className="container-blocks">
        {response && response.map(({id,title,poster_path,release_date,vote_average}) => (
            <MoveItem history={history} key={id} title={title} id={id} poster_path={poster_path} release_date={release_date} vote_average={vote_average }/>
        ))} 
        </ul>
    )
}