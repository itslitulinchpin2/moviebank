import React from 'react'
import Banner from '../../components/banner'
import Row from '../../components/row'
import requests from '../../api/request'
const MainPage = () => {
  return (
    <div>
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
  )
}

export default MainPage
