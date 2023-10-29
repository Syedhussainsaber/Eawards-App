import React from 'react'



const Slider = ({sliderImgs}) => {

  return (
    <div className='w-75' style={{position:'relative',top:"180px"}}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src={'https://image.tmdb.org/t/p/w500/'+ sliderImgs['sliderImg1']}  className="d-block" width={"100%"} height={'500px'}  alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>{popularMovies?.results[1]['title']}</h5>
        <p>{popularMovies?.results[1]['overview']}</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img  src={'https://image.tmdb.org/t/p/w500/'+ sliderImgs['sliderImg2']}     className="d-block" width={"100%"} height={'500px'}  alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>{popularMovies?.results[3]['title']}</h5>
        <p>{popularMovies?.results[3]['overview']}</p>
      </div> */}
    </div>
    <div className="carousel-item">
      <img width={"100%"} height={'500px'}  src={'https://image.tmdb.org/t/p/w500/'+ sliderImgs['sliderImg3']}  className="d-block" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h5>{popularMovies?.results[4]['title']}</h5>
        <p>{popularMovies?.results[4]['overview']}</p>
      </div> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider


