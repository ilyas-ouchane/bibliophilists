import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './Sections/Profile.css'

function Profile(props) {

    const [SignleUser, setSignleUser] = useState([])

    useEffect(() => {
        Axios.get(`/api/users/auth`)
            .then(res => {
                setSignleUser(res.data)
            })
    })

  return (
    <div className="container">
  <div className="row profile">
    <div className="col-md-3">
      <div className="profile-sidebar">
        {/* SIDEBAR USERPIC */}
        <div width="50px" height="10px" align="center">
          <img src={SignleUser.image} className="img-responsive" alt />
        </div>
        {/* END SIDEBAR USERPIC */}
        {/* SIDEBAR USER TITLE */}
        <div className="profile-usertitle">
          <div className="profile-usertitle-name">
            {SignleUser.name}
          </div>
          <div className="profile-usertitle-job">
            Email : {SignleUser.email}
          </div>
        </div>
        {/* END SIDEBAR USER TITLE */}
        {/* SIDEBAR BUTTONS */}
        {/* <div className="profile-userbuttons">
          <button type="button" className="btn btn-success btn-sm">Follow</button>
          <button type="button" className="btn btn-danger btn-sm">Message</button>
        </div> */}
        {/* END SIDEBAR BUTTONS */}
      </div>
    </div>
  </div>
</div>
  )
}

export default Profile
