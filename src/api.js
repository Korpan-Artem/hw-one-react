const apiKey = '7b464247e90524d38606c5ec0956b2ed';

export const getTrending = () => {
    return fetch (
        `https://api.themoviedb.org/3/trending/movie/day?api_key=7b464247e90524d38606c5ec0956b2ed`,
    )
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('Not found');
    })
    .then(data => data.results)
    .catch(err => {
        throw err;
    });
};

export const fetchMoviesDetails = movieId => {
    return fetch (
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    )
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        throw new Error('not found');
    })
    .catch(err => {
        throw err;
    });
};