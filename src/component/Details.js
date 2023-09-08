import React, { useEffect, useState } from 'react'
import './custom.css'
import Videos from './Videos'
export default function Details() {
    const [name, setName] = useState("")
    const [overview, setOverview] = useState("")
    const [release, setRelease] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [genre, setGenre] = useState([])
    const [budget, setBudget] = useState("")
    const [revenue, setRevenue] = useState(0)
    const id = window.location.pathname;
    var res = id.replace(/\D/g, "");
    const fetchDetails = async () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Njg2NzFjNjE2MWQzYjJjOWJmNzgxMDI4YTRmYzMxYyIsInN1YiI6IjY0ZjcyZjg1NWYyYjhkMDBlMTJkNGRjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6ZJRKj-_97UIkNC8twzXXYMS02mWlbVNqvU4s55ozZs'
            }
        };
        let data = await fetch(`https://api.themoviedb.org/3/movie/${res}?language=en-US`, options)
        let response = await data.json()
        setName(response.title)
        setOverview(response.overview);
        setRelease(response.release_date)
        // console.log(response)
        setImageUrl(response.poster_path)
        setBudget(response.budget)
        // console.log(response.genres)
        setGenre(response.genres)
        setRevenue(response.revenue)
    }
    useEffect(() => {
        fetchDetails()
    })
    return (
        <div className='container my-3' id='details-container' style={{ height: "100vh", width: "1800px", borderRadius: "12px" }}>
            {/* <h1 style={{paddingTop:"100px"}}>{name}</h1> */}
            <img id="movie_image" src={!image_url ? image_url : `https://image.tmdb.org/t/p/original/${image_url}`} className="card-img-top" style={{ height: "500px", width: "400px", marginTop: "30px", marginLeft: "30px", position: "relative", float: "left", paddingRight: "30px" }} alt={name} />
            <div className='container' id="movie_details" style={{ textAlign: "justify" }}>
                <div style={{ padding: "30px" }}> <h5> Name:<br /> <strong>{name}</strong></h5><br />
                    <h5>Release Date:<br /> <strong>{release}</strong></h5><br />
                    <h5> Overview:<br /><strong>  {overview}</strong></h5><br />

                    <h5> Genres:
                        <strong>
                            {genre.map((element) => {
                                return <div key={crypto.randomUUID()}>
                                    {element.name}
                                </div>
                            })}
                        </strong>
                    </h5><br />
                    <h5> Budget:<strong>  Rs.  {budget}</strong></h5><br />
                    <h5>
                        Revenue:
                        <strong>
                            { } Rs.{revenue}
                        </strong>
                    </h5><br/>
                    <h5 style={{paddingLeft:"390px"}}>Trailer</h5>
                    <Videos id={res} />
                </div>
            </div>
        </div>
    )
}
