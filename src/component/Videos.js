import React, { useEffect, useState } from 'react'
import './custom.css'
export default function Videos(props) {
    const [gresults, setResults] = useState([])
    const fetchData = async () => {
        let data = await fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=868671c6161d3b2c9bf781028a4fc31c&append_to_response=videos
        `)
        let response = await data.json()
        setResults(response.videos.results)
    }
    useEffect(() => {
        fetchData();
    })
    return (
        <div>
            <div className="ratio"  >
                {gresults.map((element) => {
                    return <div key={crypto.randomUUID()}>
                        <iframe title={element.title}id="youtube-trailer"style={{ marginLeft: "390px", height: "290px", width: "500px" }} src={`https://tube.rvere.com/embed?v=${element.key}`}
                            allow="accelerometer;" allowFullScreen />
                    </div>
                })}
            </div>
        </div >
    )
}
