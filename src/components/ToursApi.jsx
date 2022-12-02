import React, { useEffect, useState } from 'react'

const url = "https://course-api.com/react-tours-project";

const ToursApi = () => {
  const [tours, setTours] = useState([]);

  const[readmore,setReadmore] = useState(false);
  const travelData = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours)
  }


  useEffect(() => {
    travelData(tours);
  }, [])



  return (
    <>
      <h3 className='alert alert-success text-center'>TOURS API</h3>

      <div className="container">
        <div className="row shadow-2-soft">
          {tours.map((tour) => {

            const { id, name, info, image,price } = tour;



            return (
              <center>
                <div className="col-sm mt-2 bg-gradient-info">
                <div className="card">
                  <img className="card-img-top" src={image} alt="Card image cap"   style={{width:"380px" ,height:"200px"}}/>
                  <div className="card-body">
                    <h5 className="card-title   fa-affiliatetheme text-bg-secondary">{name}</h5>
                    <p>{readmore ? info :`${info.substring(0,200)}...` }
                    <button onClick={() => setReadmore(!readmore)}>
                      {readmore ? "Show lease": "read more"} {" "}
                    </button>
                    </p>
                    <button className='btn btn-info'>${price}</button>
                    <a href="#" className="btn btn-primary"><span className='alert alert-primary'>Cupon Code&nbsp;{id}</span></a>

                  </div>
                </div>
              </div>
              </center>
            )

          })}
        </div>
      </div>
    </>
  )
}

export default ToursApi
