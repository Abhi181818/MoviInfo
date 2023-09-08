import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieItem from './MovieItem';
import './custom.css'
const Movies = (props) => {
    const [results, setResults] = useState([])
    const [page, setPage] = useState(1)
    const [total_results, setTotalResult] = useState(0)
    useEffect(() => {
        updateMovie();
    })
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateMovie = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njg2NzFjNjE2MWQzYjJjOWJmNzgxMDI4YTRmYzMxYyIsInN1YiI6IjY0ZjcyZjg1NWYyYjhkMDBlMTJkNGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZJRKj-_97UIkNC8twzXXYMS02mWlbVNqvU4s55ozZs'
            }
        };

        let data = await fetch(`https://api.themoviedb.org/3/${props.top}/${props.category}?language=en-US&page=${page}`, options)
        // 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
        let response = await data.json()
        setResults(response.results)
        setTotalResult(response.total_results)
    }
    const fetchMore = async () => {
        setPage(page + 1)
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njg2NzFjNjE2MWQzYjJjOWJmNzgxMDI4YTRmYzMxYyIsInN1YiI6IjY0ZjcyZjg1NWYyYjhkMDBlMTJkNGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZJRKj-_97UIkNC8twzXXYMS02mWlbVNqvU4s55ozZs'
            }
        };

        let data = await fetch(`https://api.themoviedb.org/3/${props.top}/${props.category}?language=en-US&page=${page + 1}`, options)
        let response = await data.json()
        setResults(results.concat(response.results))
        setTotalResult(response.total_results)
    }
    return (
        <div className='container my-4 ' style={{ paddingTop: "5px" }}>
            <h2 className='text-center' style={{ margin: "30px" }}>
                <strong id="headline">Top {capitalizeFirstLetter(props.category.replace(/[^a-zA-Z0-9 ]/g, ''))} {capitalizeFirstLetter(props.top)}</strong></h2>
            <InfiniteScroll
                dataLength={results.length}
                next={fetchMore}
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
export default Movies