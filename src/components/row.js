import React from 'react'
import {useState,useEffect} from'react'
import axios from '../api/axios'
import './row.css'
import MovieModal from './MoviesModal'


const Row = ({title,id,fetchURL,isLargeRow}) => {
const [movies,setMovies]=useState([]);
const [modalOpen, setModalOpen] = useState(false);
const [movieSelected, setMovieSelected] = useState({});

useEffect(()=>{
    fetchMovieData();
},[])

const  fetchMovieData = async () => {
    const request = await axios.get(fetchURL)
    setMovies(request.data.results);
}

const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (



    <section className="row">
<h2>{title}</h2>
<div className="slider">
  <div className="slider__arrow-left">
    <span
      className="arrow"
      onClick={() => {
        document.getElementById(id).scrollLeft -= window.innerWidth - 80;
      }}
    >
      {"<"}
    </span>
  </div>
  <div id={id} className="row__posters">
    {movies.map((movie) => (
      <img
        key={movie.id}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={`https://image.tmdb.org/t/p/original/${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        } `}
        alt={movie.name}
        onClick={() => handleClick(movie)}
      />
    ))}
  </div>
  <div className="slider__arrow-right">
    <span
      className="arrow"
      onClick={() => {
        //보이는 화면 가로가 window.innerWidth이므로 그것보다 조금 작게 이동시킴
        document.getElementById(id).scrollLeft += window.innerWidth - 80;
      }}
    >
      {">"}
    </span>
  </div>
</div>

{modalOpen && (
  <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
)}
</section> 
    /*
    <section className="row">
      <h2>{title}</h2>
      <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} // loop 기능을 사용할 것인지
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 6, // 몇개씩 슬라이드 할지
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation  // arrow 버튼 사용 유무 
        pagination={{ clickable: true }} // 페이지 버튼 보이게 할지 
      >
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <SwiperSlide>
              <img
                key={movie.id}
                style={{ padding: "25px 0" }}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    
    //modalOpen이 true일때만 modal 보여주기 
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
    */
  );
}

// eslint-disable-next-line no-lone-blocks

export default Row
