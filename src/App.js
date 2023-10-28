
import './App.css';
import Nav from './components/nav';
import Banner from './components/banner';
import Row from './components/row';
import requests from './api/request';
function App() {
  return (
    <div>
      <Nav></Nav>
      <Banner></Banner>
      <Row 
      title="NETFLIX ORIGINALS"
      id="NO"
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow />

      <Row
      title="Trending Now"
      id="TN"
      fetchURL={requests.fetchTopRated}/>
      <Row
      title="Action Movies"
      id="AM"
      fetchURL={requests.fetchActionMovies}/>
      <Row
      title="Comedy Movies"
      id="CM"
      fetchURL={requests.fetchComedyMovies}/>
      
    </div>
  );
}

export default App;
