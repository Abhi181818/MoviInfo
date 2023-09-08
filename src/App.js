import Movies from "./component/Movies";
import Navbar from "./component/Navbar";
import {  Routes, Route, Link } from "react-router-dom";
import Search from "./component/Search";
import Details from "./component/Details";
function App() {
  const ids = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      <div className="mx-20">
        {
          ids.map((id) => {
            return (
              <Link to={`/id${id}`} className="link-details" ></Link>
            )
          })
        }
      </div>
     {/* <Router> */}
      <Navbar />
      <Search />
      <Routes>
        <Route path={`/id/:id`} element={<Details  key="details" m_id={ids} />}></Route>
        <Route exact path='/' element={<Movies key="/" top="movie" category="now_playing" />}>
        </Route>
        <Route exact path='/tv' element={<Movies key="toptv" top="tv" category="popular" />}>
        </Route>
        <Route exact path='/movie' element={<Movies key="topmovie" top="movie" category="popular" />}>
        </Route>
        <Route exact path='/upcoming' element={<Movies key="upcoming" top="movie" category="upcoming" />}>
        </Route>
        <Route exact path='/trending' element={<Movies key="trending" top="trending" category="all/day" />}>
        </Route>
      </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
