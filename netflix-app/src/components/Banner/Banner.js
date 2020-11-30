import React, { useState, useEffect } from 'react'
import './style/style.css'
import axios from '../../axios'
import requests from '../../requests';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const random = Math.floor(Math.random() * request.data.results.length);
            setMovie(request.data.results[random]);
            
            return request;
        }
        fetchData();
    }, []);

    function truncate(str , num) {
        return str?.length>num ? str.substr(0,num-1)+"..." : str ;
    }


    return ( 
    <header className = "banner"
        style = {
            {
                backgroundSize: "cover",
                backgroundImage: `url("${requests.baseUrl}${movie.backdrop_path}")`,
                backgroundPosition: "center center"
            }
        } >
        <div className = "banner_contents" >

            <h1 className="banner_title"> { movie?.title || movie?.name || movie?.originale_name } </h1>
            <div className="banner_buttons">
                <button className = "banner_button" > Play </button> 
                <button className = "banner_button" > My list </button> 
            </div>
            <h1 className="banner_description">{truncate(movie?.overview , 150)}</h1>

        </div>

        <div className="banner_fadeBottom"></div>
    </header>
    )
};

export default Banner ;