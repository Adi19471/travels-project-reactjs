import React, { useEffect, useState } from 'react'
const url = "https://api.github.com/users";

const GithubApi = () => {

 const [user, setUser] = useState([]);

 const userResult = async () => {

  const data = await fetch(url);
  const user = await data.json();
  setUser(user)


 }

 useEffect(() => {
  userResult(user)
 }, [])

 return (
  <div>
   <div className="container">
    <div className="row">
    <h1 className='text-center text-white fa-4x'>GITHU PROFILE DETAILES </h1>
     {user.map((user )  => {
      const { id, avatar_url ,url,login} = user;

      return (

       <div className="col-sm-4 mt-3">
        <div  className="card">
         <img  src={avatar_url}   className="card-img-top"  alt="Fissure in Sandstone" />
         <div className="card-body">
          <h5 className="card-title">{ id}</h5>
          <p className="card-text">{url}</p>
          <a href="repos_url" className="btn btn-primary">{login}</a>
         </div>
        </div>
       </div>
      )
     })}
    </div>
   </div>
  </div>
 )
}

export default GithubApi
