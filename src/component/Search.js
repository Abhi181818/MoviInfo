import React, { useEffect } from 'react'
import './custom.css'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieItem from './MovieItem'
export default function Search() {
    const [results, setResults] = useState([])
    const [total_results, setTotalResult] = useState(0)
    const handleOnChange = () => {
        var x = document.getElementById("search-bar").value;
        fetchData(x);
    }
    useEffect(() => {
        handleOnChange()
    })
    const fetchData = async (query) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njg2NzFjNjE2MWQzYjJjOWJmNzgxMDI4YTRmYzMxYyIsInN1YiI6IjY0ZjcyZjg1NWYyYjhkMDBlMTJkNGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZJRKj-_97UIkNC8twzXXYMS02mWlbVNqvU4s55ozZs'
            }
        };

        let data = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options)
        let response = await data.json()
        setResults(response.results)
        setTotalResult(response.total_results)
    }
    return (
        <div className='container' style={{ marginTop: "80px" }}>
            <form>
                <input type="search" id="search-bar" onChange={handleOnChange} placeholder='Search Movies,Tv Series' autoFocus></input>
            </form>
            <InfiniteScroll
                dataLength={results.length}
                next={fetchData}
                hasMore={results.length !== total_results}
            >
                <div className='container my-3'>
                    <div className='row' >
                        {results.map((element) => {
                            return <div className='col-md-4' key={crypto.randomUUID()}> <MovieItem title={element.name ? element.name : element.title} image_url={element.poster_path} m_id={element.id} release_date={element.release_date} vote_average={element.vote_average} /></div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}
