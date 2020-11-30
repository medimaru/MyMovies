import React , {useState , useEffect} from 'react';
import axios from '../../axios';
import baseUrl from '../../requests';
import './style/style.css';

function Row({title , fetchUrl , isLargeRow}) {
    const[movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        };
        fetchData();
    },[fetchUrl]);

    return ( 
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {
                    movies.map(movie=>{
                        return <img 
                                    key={movie.id}
                                    className="row_poster"
                                    src={`${baseUrl.baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                                    alt={movie.name} />
                    })
                }
            </div>
        </div>
    )
}

export default Row