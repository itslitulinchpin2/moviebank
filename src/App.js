
import './App.css';
import Nav from './components/nav';
import Banner from './components/banner';
import Row from './components/row';
import requests from './api/request';
import Footer from './components/footer';
import { Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage'

const Layout = () => {
  return(
    <div>
      <Nav></Nav>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  )
}

function App() {
  return (
   
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout/>}></Route>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
      </Routes>

    </div>
  );
}

export default App;
