import React from 'react'

const Card = ({title, btnText, img,id}) => {
  return (
        <div className="card" style={{width:'18em'}}>
  <img src={img} className="card-img-top" alt={title} height={320}/>
  <div className="card-body d-flex flex-column">
    <h5 className="card-title text-center">{title}</h5>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <a href={'/movieWorld/moviesInfo/'+`${id}`} className="btn btn-dark">{btnText}</a>
  </div>
</div>
  )
}

export default Card
