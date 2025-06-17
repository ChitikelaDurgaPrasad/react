import React from 'react'

const UserProfileCard = React.memo(({img}) => {
  console.log("inside child Component");
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img 
        src={img}
        className="card-img-top" 
        alt="Card image" 
        height="180"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <h5 className="card-text">Some quick example.</h5>
        <p className="card-text">Some quick example.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
})

export default UserProfileCard