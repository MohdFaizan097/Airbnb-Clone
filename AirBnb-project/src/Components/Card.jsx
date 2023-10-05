function Card(props) {
  return (
    <>
    
    <section>
      <div className="card-box">
        <div className="img-box">
        <img src={props.img} alt="" className="card-img"/>
        </div>
        <div className="text-box">
          <h2 className="card-title">{props.name}</h2>
          <p className='gray'>{props.distance}</p>          
          <p><span className='bold-text'>{props.price}</span> night</p>          

        </div>

      </div>
      </section>
    

    </>
  )
}

export default Card